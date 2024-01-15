const state = {
    playerScore: 0,
    computerScore: 0,
    isEnded: false
}

const Choices = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
};

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const message = document.querySelector("#message");

rockButton.addEventListener("click", () => {
    playOption(Choices.ROCK)
});

paperButton.addEventListener("click", () => {
    playOption(Choices.PAPER)
});

scissorsButton.addEventListener("click", () => {
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

function playOption(playerSelection) {
    if (state.isEnded) return;

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection); 
    console.log(result);

    if (result === 1) {
        message.textContent = "You get a point!";
        state.playerScore++;
        playerScore.textContent = state.playerScore.toString();
        if (state.playerScore === 5) {
            message.textContent = "You wins!";
            state.isEnded = true;
        }
    }

    if (result === -1) {
        message.textContent = "Computer gets a point!";
        state.computerScore++;
        computerScore.textContent = state.computerScore.toString();
        if (state.computerScore === 5) {
            message.textContent = "Computer wins!";
            state.isEnded = true;
        }
    }

    if (result === 0) {
        message.textContent = "Ties!";
    }
}