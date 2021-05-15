const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin')
const data=require('./src/data.json')
const {page_meta,nav,breadcrumbs,stock,page_text}=data
const {h1,title,meta_keywords,meta_description}=page_meta


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const src=path.resolve(__dirname, 'src')
const build=path.resolve(__dirname, 'docs')

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

const filename = ext => isDev ? `static/${ext}/[name].${ext}` : `static/${ext}/[name].[hash].${ext}`

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            },
        },
        'css-loader'
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

const babelOptions = () => {
    return {
        presets: [
            '@babel/preset-env'
        ]
    }
}


const jsLoaders = () => {
    return [{
        loader: 'babel-loader',
        options: babelOptions()
    }]
}

const plugins = () => {
    return [
        new HTMLWebpackPlugin({
        templateParameters:{'h1': require('./src/data.json')["page_meta"]["h1"]||"TRUCKS"},
        template: path.resolve(src,'index.pug'),
        minify:{collapseWhitespace: isProd}
}
        ),
        new CleanWebpackPlugin(),
        new CopyPlugin([
                {from: path.resolve(src, 'static',"images"),
                   to: path.resolve(build, 'static',"img"),
                    context: path.resolve("src", 'static',"images")
                },
        ]),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ]
}

module.exports = {
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', path.resolve(src,'index.js')]
    },
    output: {
        filename: filename('js'),
        path: build
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@': src,
        }
    },
    optimization: optimization(),
    devtool: isDev ? 'source-map': undefined,
    devServer: {
        overlay: true,
        open: true,
        port: 82,
        hot: isDev
    },
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.(pug|jade)$/,
                use:[{
                    loader: 'pug-loader',
                }]
            }
        ]
    }
}