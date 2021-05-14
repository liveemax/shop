require('./static/css/global.scss');
import {addActiveBurger} from "./static/js/add_is-active"
import {addActiveAside} from "./static/js/add_is-active_menu"
import {addActiveSort} from "./static/js/add_is-active_sort"

const addActiveFunction=(input)=>{
    activeListener.addEventListener('click',input)
}

// Listeners
//burger
let activeListener=document.querySelector(".activeListener")
addActiveFunction(addActiveBurger)
//aside
activeListener=document.querySelector(".aside__menu")
addActiveFunction(addActiveAside)
//pagination
activeListener=document.querySelectorAll(".dropdown")
activeListener.forEach((el)=>{
    activeListener=el
    addActiveFunction(addActiveSort)
})
