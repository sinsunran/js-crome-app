const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY ="toDos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDO(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => String(toDo.id) !== li.id);
    saveToDos();
}

function paintToDo(newToDo){
    const li =document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "✔";
    button.addEventListener("click", deleteToDO);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.prepend(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo =toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        id:Date.now(),
        text:newToDo
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos =JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}