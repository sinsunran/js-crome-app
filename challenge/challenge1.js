const title = document.querySelector("body h1");

function superEventHandler(){
   
    function changesOnText(colorname,text){
        title.style.color = colorname;
        title.innerText = text;
    }

    if(title.onmouseover !== null){
        changesOnText("blue","The mouse is here!");
    } else if(title.onmouseleave !== null) {
        changesOnText("tomato","The mouse is gone!");
    } else if(window.resize === ){
        changesOnText("purple","You just resized!");
    } else if(window.oncontextmenu ===){
        changesOnText("red","That was a right click!")
    }
}

title.addEventListener("mouseover",superEventHandler);

title.addEventListener("mouseleave",superEventHandler);

window.addEventListener("resize",superEventHandler);

window.addEventListener("contextmenu",superEventHandler);




