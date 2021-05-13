export const addActive=()=>{
    const menu=document.querySelector('.navbar-menu')
    const burger=document.querySelector('.navbar-burger')
    if(burger.classList.value.match(/(is-active)/))
    {
        burger.classList.remove('is-active')
        menu.classList.remove('is-active')
    }
    else
    {
        menu.classList.add('is-active')
        burger.classList.add('is-active')
    }
}
