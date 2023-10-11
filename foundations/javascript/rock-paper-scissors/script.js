const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const winner = document.querySelector('#winner');

let playerWins = 0;
let computerWins = 0;

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {

        if ((playerWins === 0) && (computerWins === 0)) {
            winner.textContent = "";
        }

        let pSelection = button.textContent;
        let cSelection = getComputerChoice();

        playround(pSelection, cSelection);

        playerScore.textContent = playerWins;
        computerScore.textContent = computerWins;

        if (playerWins === 5) {
            winner.textContent = "Player wins!";
            reset();
        } else if (computerWins === 5) {
            winner.textContent = "Computer wins!";
            reset();
        }

        e.stopPropagation();
    });
});

let reset = () => {
    playerWins = 0;
    playerScore.textContent = "";
    computerWins = 0;
    computerScore.textContent = "";
};

let getComputerChoice = function () {
    let random = Math.floor(Math.random() * 3);

    let choice = "";
    switch (random) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            break;
    }

    return choice;
};




let playround = function (playerSelection, computerSelection) {
    // compare selections (case-insensitive)
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    if (ps === cs) {
        results.textContent = "Tie!";
    }

    // let winner = "";

    // rock beats scissors, loses to paper
    if (ps === "rock" && cs === "scissors") {
        results.textContent = "Player wins!";
        playerWins++;
    } else if (ps === "rock" && cs === "paper") {
        results.textContent = "Computer wins!";
        computerWins++;
    }



    // paper beats rock, loses to scissors
    if (ps === "paper" && cs === "rock") {
        results.textContent = "Player wins!";
        playerWins++;
    } else if (ps === "paper" && cs === "scissors") {
        results.textContent = "Computer wins!";
        computerWins++;
    }

    // scissors beats paper, loses to rock
    if (ps === "scissors" && cs === "paper") {
        results.textContent = "Player wins!";
        playerWins++;
    } else if (ps === "scissors" && cs === "rock") {
        results.textContent = "Computer wins!";
        computerWins++;
    }
};