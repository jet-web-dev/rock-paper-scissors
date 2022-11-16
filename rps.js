//initialize variables

let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
let playerSelection = "";
let computerSelection = "";

const announce = document.querySelector('#results');
const pscore = document.querySelector('#pscore');
const cscore = document.querySelector('#cscore');

// randomized computer selection from rps choices array
function getComputerChoice () {
    let choices = ["Rock","Paper","Scissors"] ;
    let rando = Math.floor(Math.random() * choices.length) ;

    return choices[rando] ;
}

// single round of rps function, includes value comparisons

document.getElementById('Rock').addEventListener('click', playRound, false);
document.getElementById('Paper').addEventListener('click', playRound, false);
document.getElementById('Scissors').addEventListener('click', playRound, false);

function playRound(e) {
    computerSelection = getComputerChoice();
    playerSelection = this.id;

    if (playerScore === 5 || computerScore === 5) {
        announce.textContent = "The game is over!"
        return;
    }

    if (playerSelection === computerSelection) {
        announce.textContent = "The round ends in a tie!";
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerScore ++;
        announce.textContent = "The player wins this round!";
        pscore.textContent = `${playerScore}`;
    } else {
        computerScore ++;
        announce.textContent = "The computer wins this round!";
        cscore.textContent = `${computerScore}`;
    }

    if (playerScore === 5 || computerScore === 5) {
        announce.textContent = "The game is over!"
    }
    return;
}