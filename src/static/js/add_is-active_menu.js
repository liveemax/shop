export const addActiveAside=(e)=>{
    let current=e.currentTarget
    if(current.classList.value.match(/(is-active)/))
    {
        current.classList.remove("is-active")
        current.nextSibling.style.display="none"
    }
    else{
        current.classList.add("is-active")
        current.nextSibling.style.display="block"
    }
}
