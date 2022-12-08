const buttons = document.getElementsByClassName("choice-button");
const resultMsg = document.getElementById("result-message");
const playOpt = document.getElementById("player-option");
const cpuOpt = document.getElementById("computer-option");


for (button of buttons) {
    button.addEventListener("click", function() {
        let playerButton = this.getAttribute("data-choice");
        playGame(playerButton);
    })
}

function playGame() {

};

function computerTurn() {

};

function checkWinner() {

};

function playerWin() {

};

function playerLose() {

};