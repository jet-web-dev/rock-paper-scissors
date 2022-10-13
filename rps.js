
// randomized computer selection from rps choices array
function getComputerChoice () {
    let choices = ["Rock","Paper","Scissors"] ;
    let rando = Math.floor(Math.random() * choices.length) ;

    return choices[rando] ;
}

//function for player selection

function getPlayerChoice () {
    let choices = ["Rock","Paper","Scissors"] ;
    let playerChoice = prompt("Please enter 'Rock', 'Paper', or 'Scissors' for your selection") ;
    let sanitizedChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1).toLowerCase() ;
    let sanityCheck = choices.includes(sanitizedChoice) ;

    while (sanityCheck === false) {
        playerChoice = prompt("Incorrect submission. Please enter 'Rock', 'Paper', or 'Scissors' for your selection") ;
        sanitizedChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1).toLowerCase() ;
        sanityCheck = choices.includes(sanitizedChoice) ;
    }

    return sanitizedChoice;
}

// single round of rps function, includes value comparisons

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return 1
    } else {
        return 2
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let currentRound = 0;
    let playerSelection = "";
    let computerSelection = "";

    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        currentRound = playRound(playerSelection, computerSelection);

        if (currentRound === 1){
            playerScore ++;
            console.log(`You win this round! The score is - Player: ${playerScore} | Computer: ${computerScore}`)
        } else if (currentRound === 2) {
            computerScore ++;
            console.log(`The computer wins this round! The score is - Player: ${playerScore} | Computer: ${computerScore}`)
        } else {
            console.log(`We have a tie! The score remains - Player: ${playerScore} | Computer: ${computerScore}`)
        }        
    }

    console.log(`The game has ended! The final score is - Player: ${playerScore} | Computer: ${computerScore}`)
}

game();