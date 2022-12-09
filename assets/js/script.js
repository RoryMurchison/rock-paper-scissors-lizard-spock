/**
 * Declaring variables
 */
const buttons = document.getElementsByClassName("choice-button");
const resultMsg = document.getElementById("result-message");
const playOpt = document.getElementById("player-option");
const cpuOpt = document.getElementById("computer-option");
let wins = document.getElementById("games-won");
let lost = document.getElementById("games-lost");
let item;
let cpuItem;
let result;


/**
 * Adds an event listener looking for any buttons being clicked
 */
for (button of buttons) {

    button.addEventListener("click", function() {

        item = this.textContent
        playOpt.textContent = `${item}`;

        computerTurn();
        cpuOpt.textContent = `${cpuItem}`;

        result = checkWinner();
        resultMsg.textContent = `${result}`;

        if(result == "You Win!") ? playerWin() : playerLose();

    })
};

function computerTurn() {

    let computerNumber = Math.floor(Math.random() * 5);

    switch(computerNumber){
        case 0:
            cpuItem = "Rock";
            break;
        case 1:
            cpuItem = "Paper";
            break; 
        case 2:
            cpuItem = "Scissors";
            break; 
        case 3:
            cpuItem = "Lizard";
            break; 
        case 4:
            cpuItem = "Spock";
            break; 
    }

};

/**
 * A function to determine the outcome of the game
 */
function checkWinner() {

    if(cpuItem == item){
        return "Game Draw!";
    }
    else if(cpuItem == "Rock"){
        return (item == "Spock" || item == "Paper") ? "You Win!" : "You Lose!";
    }
    else if(cpuItem == "Paper"){
        return (item == "Scissors" || item == "Lizard") ? "You Win!" : "You Lose!";
    }
    else if(cpuItem == "Scissors"){
        return (item == "Rock" || item == "Spock") ? "You Win!" : "You Lose!";
    }
    else if(cpuItem == "Lizard"){
        return (item == "Rock" || item == "Scissors") ? "You Win!" : "You Lose!";
    }
    else if(cpuItem == "Spock"){
        return (item == "Paper" || item == "Lizard") ? "You Win!" : "You Lose!";
    }

};

function playerWin() {

};

function playerLose() {

};