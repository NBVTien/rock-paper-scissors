const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const rockPlayer = document.querySelector("#rock-player");
const paperPlayer = document.querySelector("#paper-player");
const scissorsPlayer = document.querySelector("#scissors-player");
const rockComputer = document.querySelector("#rock-computer");
const paperComputer = document.querySelector("#paper-computer");
const scissorsComputer = document.querySelector("#scissors-computer");
const message = document.querySelector("#message");
const countdown = document.querySelector("#countdown");
const result = document.querySelector("#result");
const resultMessage = document.querySelector("#result-message");

const state = {
    playerScore: 0,
    computerScore: 0,
    isEnded: false
}

const Choices = { ROCK: 'rock', PAPER: 'paper', SCISSORS: 'scissors' };
const redFilter = "invert(16%) sepia(84%) saturate(6313%) hue-rotate(358deg) brightness(103%) contrast(114%)";
const greenFilter = "invert(32%) sepia(96%) saturate(6078%) hue-rotate(108deg) brightness(94%) contrast(103%)";
const yellowFilter = "invert(87%) sepia(91%) saturate(4874%) hue-rotate(357deg) brightness(102%) contrast(104%)";


rockPlayer.addEventListener("click", () => {
    playOption(Choices.ROCK)
});

paperPlayer.addEventListener("click", () => {
    playOption(Choices.PAPER)
});

scissorsPlayer.addEventListener("click", () => {
    playOption(Choices.SCISSORS)
});

function getComputerChoice() {
    const choices = Object.values(Choices);
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0; // Tie
    } else if (
        (playerSelection === Choices.ROCK && computerSelection === Choices.SCISSORS) ||
        (playerSelection === Choices.PAPER && computerSelection === Choices.ROCK) ||
        (playerSelection === Choices.SCISSORS && computerSelection === Choices.PAPER)
    ) {
        return 1; // Player wins
    } else {
        return -1; // Computer wins
    }
}

function colorReset() {
    rockPlayer.querySelector("img").style.filter = "";
    paperPlayer.querySelector("img").style.filter = "";
    scissorsPlayer.querySelector("img").style.filter = "";
    rockComputer.querySelector("img").style.filter = "";
    paperComputer.querySelector("img").style.filter = "";
    scissorsComputer.querySelector("img").style.filter = "";

}

function playOption(playerSelection) {
    if (state.isEnded) return;

    const playerItem = document.querySelector(`#${playerSelection}-player`);

    const computerSelection = getComputerChoice();
    const computerItem = document.querySelector(`#${computerSelection}-computer`);
    
    const roundResult = playRound(playerSelection, computerSelection); 

    if (roundResult === 1) {
        colorReset();
        playerItem.querySelector("img").style.filter = greenFilter;
        computerItem.querySelector("img").style.filter = redFilter;

        state.playerScore++;
        playerScore.textContent = state.playerScore.toString();
        if (state.playerScore === 5) {
            resultMessage.textContent = "You wins!";
            result.style.display = "flex";
            state.isEnded = true;
        }
    }

    if (roundResult === -1) {
        colorReset();
        playerItem.querySelector("img").style.filter = redFilter;
        computerItem.querySelector("img").style.filter = greenFilter;

        state.computerScore++;
        computerScore.textContent = state.computerScore.toString();

        if (state.computerScore === 5) {
            resultMessage.textContent = "Computer wins!";
            result.style.display = "flex";
            state.isEnded = true;
        }
    }

    if (roundResult === 0) {
        colorReset();
        playerItem.querySelector("img").style.filter = yellowFilter;
        computerItem.querySelector("img").style.filter = yellowFilter;
    }
}