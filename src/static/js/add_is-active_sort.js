export const addActiveSort=(e)=>{
    const target=e.currentTarget
    if(target.classList.value.match(/(is-active)/))
        target.classList.remove('is-active')
    else
        target.classList.add('is-active')
}
