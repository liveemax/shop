require('./static/css/global.scss');
import {addActiveBurger} from "./static/js/add_is-active"
import {addActiveAside} from "./static/js/add_is-active_menu"

// Listeners
//burger
let activeListener=document.querySelector(".activeListener")
activeListener.addEventListener('click',addActiveBurger)
//aside
activeListener=document.querySelector(".aside__menu")
activeListener.addEventListener('click',addActiveAside)