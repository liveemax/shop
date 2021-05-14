export const addActiveBurger=(e)=>{
    const menu=document.querySelector('.navbar-menu')
    const target=e.currentTarget
    if(target.classList.value.match(/(is-active)/))
    {
        target.classList.remove('is-active')
        menu.classList.remove('is-active')
    }
    else
    {
        menu.classList.add('is-active')
        target.classList.add('is-active')
    }
}
