const formBody = document.querySelector("#body");
const inputRange = document.querySelector("#input-range input");
const inputGuess = document.querySelector("#input-guess input");
const playBtn = document.querySelector("#button");

const explainationDiv = document.querySelector("#explaination");
const resultDiv = document.querySelector("#result");

const explaination = document.createElement("span")
const result = document.createElement("span")

function prevent(event){
    event.preventDefault();
}

function handleClickPlay(event){
    event.preventDefault();
    const range = parseInt(inputRange.value);
    const guess = parseInt(inputGuess.value);
    const machineNumber = Math.round(Math.random()*range)
    explaination.innerText = `You chose: ${guess}, the machine chose: ${machineNumber}` 
    if (guess === machineNumber){
        result.innerText = "You win!"
    } else {
        result.innerText = "You lose!"
    }
    explainationDiv.appendChild(explaination);
    resultDiv.appendChild(result);
}
// formBody.addEventListener("submit",prevent);
playBtn.addEventListener("click",handleClickPlay);

