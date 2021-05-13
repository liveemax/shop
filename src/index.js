require('./static/css/global.scss');
import {addActive} from "./static/js/add_is-active"

// Listeners
const activeListener=document.querySelector(".activeListener")
activeListener.addEventListener('click',addActive)
