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
    } else if(window.resize !==null){
        changesOnText("purple","You just resized!");
    } else if(window.oncontextmenu !==null){
        changesOnText("red","That was a right click!");
    }
}

title.addEventListener("mouseover",superEventHandler);

title.addEventListener("mouseleave",superEventHandler);

window.addEventListener("resize",superEventHandler);

window.addEventListener("contextmenu",superEventHandler);

// text1

function test1(){
    console.log(title.onmouseover);
    console.dir(title.onmouseover);
}

title.addEventListener("mouseover",test1);

// test2

function test2(event){
    console.dir(event);
}

title.addEventListener("mouseover",test2);

