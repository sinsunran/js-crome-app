const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("h1")
const HIDDEN_CLASSNAME ="hidden"
const USERNAME_KEY = "username"
const storedUsername = localStorage.username

console.log(storedUsername);
console.log(localStorage.getItem(USERNAME_KEY));

if(storedUsername !== undefined){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `greeting ${storedUsername}`;
} else if (storedUsername === undefined){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
}

function handleLoginSubmit(){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username =loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    greeting.innerText = `greeting ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleLoginSubmit)
