// JavaScript Document
const button = document.querySelector("nav > button");
const nav = document.querySelector("header > nav");


button.addEventListener('click', toggleMenu);


function toggleMenu(){
    nav.classList.toggle("showmenu")
}

