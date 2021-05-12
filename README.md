# Test task - Front-End Developer

**Задание:** сверстать страницу листинга интернет-магазина, в которой нужно отрендерить датасет из файла **data.json**. Дизайн - произвольный, за основу можно взять пример в данном [макете](https://www.figma.com/file/GZDWwVSeu1N8KHRH7B0may/Test_task_sketch?node-id=0%3A1). Фотографии к карточкам товаров из датасета лежат в папке **src/images** данного репозитория. По готовности отправить мне в [телеграм](https://t.me/AleksDrozdov) 2 ссылки: на репозиторий с исходным кодом проекта и на сверстанную страницу, задеплоенную на любой бесплатный хостинг (Github Pages, Zeit Now, Netlify, Heroku и др.).

### Что можно (и приветствуется):

* Инструменты автоматизации сборки (**Webpack**, Parcel, Gulp и др.). Идеальный пример — датасет импортируется в вебпак, и загоняется на страницу посредством HTMLWebpackPlugin (контр-идеальный пример — данные из датасета копируются и вставляются в html посредством "копировать/вставить");
* HTML-шаблонизаторы (EJS, Handlebars, **Pug/Jade**);
* LESS/SASS/**SCSS**;
* CSS-фреймворки (**Bulma**, Bootstrap, Materialize, etc.);
* Декомпозиция в разумных пределах (идеальный пример: 1 компонент - 1 файл с pug-шаблоном - 1 scss-миксин);
* AMP-стек (**PHP, MySQL**).

Полужирным отмечен стек, который используется на данный момент.

### Что нельзя:

* Реактивные JS-фреймворки (React/Angular/Vue/Svelte/etc), равно как и формировать HTML-разметку на клиенте динамически посредством ванильного JS без фреймворков (на клиент должна приходить уже сформированная статичная разметка). Исключение составляют дополнительные элементы, не имеющие отношения к основному контенту из датасета (например, мобильная навигация, декоративные элементы);
* CMS (WordPress/Joomla/Bitrix/etc);
* Если используются инструменты автоматизации сборки — помещать в один репозиторий с исходным кодом файлы готового билда и папку node_modules.
