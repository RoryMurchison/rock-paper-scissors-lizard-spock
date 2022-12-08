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


/**
 * Adds an event listener looking for any buttons being clicked
 */
for (button of buttons) {
    button.addEventListener("click", function() {
        item = this.textContent
        playOpt.textContent = `${item}`;
        let playerButton = this.getAttribute("data-choice");
        playGame(playerButton);
    })
}

function computerTurn() {

};

function checkWinner() {

};

function playerWin() {

};

function playerLose() {

};