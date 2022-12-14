// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector("body h2");
// const window = document.querySelector("defaultview");

function changesOnText(number, text) {
  title.style.color = colors[number];
  title.innerText = text;
}

const superEventHandler = {
  handleOnMouseOver: function () {
    changesOnText(0, "The mouse is here!");
  },
  handleOnMouseLeave: function () {
    changesOnText(1, "The mouse is gone!");
  },
  handleOnResize: function () {
    changesOnText(2, "You just resized!");
  },
  handleOnContextMenu: function () {
    changesOnText(3, "That was a right click!");
  }
};

title.addEventListener("mouseover", superEventHandler.handleOnMouseOver);

title.addEventListener("mouseleave", superEventHandler.handleOnMouseLeave);

window.addEventListener("resize", superEventHandler.handleOnResize);

window.addEventListener("contextmenu", superEventHandler.handleOnContextMenu);




const title = document.querySelector("body h2");
// const window = document.querySelector("defaultview");

function changesOnText(color,text){
    title.style.color = color;
    title.innerText = text;
}

const superEventHandler ={
    handleOnMouseOver : function(){
        changesOnText("#1abc9c","The mouse is here!");
    },
    handleOnMouseLeave : function(){
        changesOnText("#3498db","The mouse is gone!");
    },
    handleOnResize : function(){
        changesOnText("#9b59b6","You just resized!");
    },
    handleOnContextMenu : function(){
        changesOnText("#f39c12","That was a right click!");
    }
}

title.addEventListener("mouseover",superEventHandler.handleOnMouseOver);

title.addEventListener("mouseleave",superEventHandler.handleOnMouseLeave);

window.addEventListener("resize",superEventHandler.handleOnResize);

window.addEventListener("contextmenu",superEventHandler.handleOnContextMenu);


// const title = document.querySelector("body h1");

// function superEventHandler(){
   
//     function changesOnText(colorname,text){
//         title.style.color = colorname;
//         title.innerText = text;
//     }

//     if(title.onmouseover !== null){
//         changesOnText("blue","The mouse is here!");
//     } else if(title.onmouseleave !== null) {
//         changesOnText("tomato","The mouse is gone!");
//     } else if(window.resize !==null){
//         changesOnText("purple","You just resized!");
//     } else if(window.oncontextmenu !==null){
//         changesOnText("red","That was a right click!");
//     }
// }

// title.addEventListener("mouseover",superEventHandler);

// title.addEventListener("mouseleave",superEventHandler);

// window.addEventListener("resize",superEventHandler);

// window.addEventListener("contextmenu",superEventHandler);

// // text1

// function test1(){
//     console.log(title.onmouseover);
//     console.dir(title.onmouseover);
// }

// title.addEventListener("mouseover",test1);

// // test2

// function test2(event){
//     console.dir(event);
// }

// title.addEventListener("mouseover",test2);

