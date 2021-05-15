
require('./static/css/global.scss');
import {addActiveBurger} from "./static/js/add_is-active"
import {addActiveAside} from "./static/js/add_is-active_menu"
import {addActiveSort} from "./static/js/add_is-active_sort"
import {addActivePagination} from "./static/js/add_is-active_pagination";


const addActiveFunction=(input)=>{
    activeListener.addEventListener('click',input)
}

// Listeners

//burger

let activeListener=document.querySelector(".activeListener")
addActiveFunction(addActiveBurger)

//aside

activeListener=document.querySelectorAll(".aside__param")
activeListener.forEach((el)=>{
    activeListener=el
    addActiveFunction(addActiveAside)
})

//pagination

activeListener=document.querySelectorAll(".dropdown")
activeListener.forEach((el)=>{
    activeListener=el
    addActiveFunction(addActiveSort)
})


activeListener=document.querySelectorAll(".pagination__item")
activeListener.forEach((el)=>{
    activeListener=el
    addActiveFunction(addActivePagination)
})
