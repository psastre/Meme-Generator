import React from "react";


export default function dragAnimation(){
    const stickers = document.querySelectorAll("h3")

const body = document.querySelector("main");

console.log("hola")
      

// Make the DIV element draggable:
stickers.forEach(element => dragElement(element));
dragElement(stickers);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  // otherwise, move the DIV from anywhere inside the DIV:
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
      
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;

    elmnt.style.position="absolute"
    elmnt.style.zIndex ="10"
    body.appendChild(elmnt);
    elmnt.style.height= "100px"
    elmnt.style.width= "125px"
    elmnt.style.left="250px"
    elmnt.style.top="250px"



  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
}