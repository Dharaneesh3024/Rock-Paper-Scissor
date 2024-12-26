const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const userScoreElement = document.getElementById('userScore');
const computerScoreElement = document.getElementById('computerScore');
const resultTextElement = document.getElementById('resultText');

const choices = ['Rock', 'Paper', 'Scissors'];

let userScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => playGame('Rock'));
paperButton.addEventListener('click', () => playGame('Paper'));
scissorsButton.addEventListener('click', () => playGame('Scissors'));

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    }

    if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        userScore++;
        return 'You win!';
    }

    computerScore++;
    return 'Computer wins!';
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    // Update result text
    resultTextElement.textContent = `Your Choice: ${userChoice} - Computer's Choice: ${computerChoice}. ${result}`;

    // Update scores
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
}
