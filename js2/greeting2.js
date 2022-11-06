const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("h1");
const toDoForm2 =document.querySelector("#todo-form");
const toDoList2 =document.querySelector("#todo-list");
const HIDDEN_CLASSNAME ="hidden";
const FLEX_CLASSNAME ="flex";
const USERNAME_KEY = "username";
const storedUsername = localStorage.username;

if(storedUsername !== undefined){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(FLEX_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    toDoForm2.classList.remove(HIDDEN_CLASSNAME);
    toDoList2.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `오늘도 안녕! ${storedUsername}`;
} else if (storedUsername === undefined){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(FLEX_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    toDoForm2.classList.add(HIDDEN_CLASSNAME);
    toDoList2.classList.add(HIDDEN_CLASSNAME);
}

function handleLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(FLEX_CLASSNAME);
    const username =loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    greeting.innerText = `오늘도 안녕! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    toDoForm2.classList.remove(HIDDEN_CLASSNAME);
    toDoList2.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleLoginSubmit);
