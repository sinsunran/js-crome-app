console.dir(window);

const body = document.querySelector("body");
const bodyClasses = body.classList;

const screenWidth = window.screen.availWidth;

const PURPLE = "purple";
const SKYBLUE = "skyblue";
const YELLOW = "yellow";

function colorChange(a,b,c){
    bodyClasses.add(a);
    bodyClasses.remove(b,c);
}

function handleOnResize(){
    let windowWidth = window.innerWidth;
    if (windowWidth*2 < screenWidth){
        colorChange(SKYBLUE,PURPLE);
        // bodyClasses.add(SKYBLUE);
        // bodyClasses.remove(PURPLE);       
    } else if (3*windowWidth < 2*screenWidth){
        colorChange(PURPLE,SKYBLUE,YELLOW);
        // bodyClasses.add(PURPLE);
        // bodyClasses.remove(SKYBLUE,YELLOW);   
    } else {
        colorChange(YELLOW,PURPLE);
        // bodyClasses.add(YELLOW);
        // bodyClasses.remove(PURPLE);          
    }
}

window.addEventListener("resize",handleOnResize)

