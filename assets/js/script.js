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
        
        let playerButton = this.getAttribute("data-choice");
        playGame(playerButton);
        item = this.textContent
        playOpt.textContent = `${item}`;
        cpuOpt.textContent = `${cpuItem}`;

    })
};

/**
 * Main game code, using the data choice valuble taken from the button clicked by the user
 */
function playGame(playerButton) {

    let cpuItem = computerTurn();

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

function checkWinner() {

};

function playerWin() {

};

function playerLose() {

};