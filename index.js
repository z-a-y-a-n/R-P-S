const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScore'); 
const computerScoreDisplay = document.getElementById('computerScore'); 

let playerScore = 0;
let computerScore = 0;

resultDisplay.classList.remove('greenText', 'redText')

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice){
        result = "It's A Tie!"
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === 'scissors') ? "YOU WIN!" : "YOU LOSE!";

                break;
        
            case "paper":
                result = (computerChoice === 'rock') ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "scissors":
                result = (computerChoice === 'paper') ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = `RESULT: ${result}`;

    resultDisplay.classList.remove('greenText', 'redText', 'yellowText');

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add('greenText');
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add('redText');
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "It's A Tie!":
            resultDisplay.classList.add('yellowText');
            break;
    }
}