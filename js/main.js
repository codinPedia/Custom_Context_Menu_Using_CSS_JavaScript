"use strict";

// contextmenu width and height
let width = document.querySelector("body > contextmenu").offsetWidth;
let height = document.querySelector("body > contextmenu").offsetHeight;

// right click
document.addEventListener('contextmenu', event => {
  event.preventDefault();
  if(document.querySelector("body > contextmenu").classList.contains("show")){
    document.querySelector("body > contextmenu").classList.remove("show");
  }else{
    document.querySelector("body > contextmenu").style.left =
      `${(event.pageX+width>window.innerWidth)?window.innerWidth-width-20:event.pageX}px`;
    document.querySelector("body > contextmenu").style.top =
      `${(event.pageY+height>window.innerHeight)?window.innerHeight-height-40:event.pageY}px`;
    document.querySelector("body > contextmenu").classList.add("show");
    document.querySelector("body > contextmenu > span").innerHTML = event.target.tagName;
  }
});

// left click
document.addEventListener('click', event => {
  document.querySelector("body > contextmenu").classList.remove("show");
});
