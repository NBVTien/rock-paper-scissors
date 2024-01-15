const Choices = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
};

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

function game() {    
    for (let i = 0; i < 5; i++) {
        const playerSelection = Choices.ROCK;
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()
