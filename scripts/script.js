// JavaScript Document
var button = document.querySelector("nav > button")
var nav = document.querySelector("header>nav")


button.addEventListener('click', toggleMenu);


function toggleMenu(){
    nav.classList.toggle("showmenu")
}

window.onload = function(){
    document.getElementById('videoplayer').play()
}
