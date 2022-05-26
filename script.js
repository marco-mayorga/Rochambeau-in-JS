// The options the computer and player can use
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

function computerPlay(){
    // Chooses a number between 0-1 (so 1-3) 
    computerChoice = Math.floor(Math.random() *3);
    // Sets numbers === to one of the initial options
    switch(computerChoice){
        case 0:
            computerChoice = ROCK;
            break;
        case 1:
            computerChoice = PAPER;
            break;
        case 2:
            computerChoice = SCISSORS;
            break;
    }
    return computerChoice;
}
//  sets computerSelection equal to computerChoice
const computerSelection = computerPlay();
let playerSelection = playerChoice()

function playerChoice(){
    // Makes a prompt for player to choose rock paper or scissors
    let playerChoice = prompt("Choose Rock, Paper or Scissors");
    // makes sure playerSelection is all lower case
    playerChoice = playerChoice.toLowerCase();
    // makes sure playerSelection first letter is upper case
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    return playerChoice
}

function playRound(playerSelection, computerSelection){
    // Checks if player answer is Rock paper or scissors
    if (playerSelection === ROCK || playerSelection === PAPER || playerSelection === SCISSORS){
        // Checks for a tie
        if(computerSelection === playerSelection){
            return "It's a Tie!"
        }else{
            // all the logic in case computer chooses rock
            if (computerSelection === ROCK && playerSelection === PAPER){
                return "You Win! Paper beats Rock";
            }else if(computerSelection === ROCK && playerSelection === SCISSORS){
                return "You Lose! Rock beats Scissors";
             // all the logic in case computer chooses paper
            }else if(computerSelection === PAPER && playerSelection === ROCK){
                return "You Lose! Paper beats Rock";
            }else if(computerSelection === PAPER && playerSelection === SCISSORS){
                return "You Win! Scissors beats Paper";
              // all the logic in case computer chooses scissors
            }else if(computerSelection === SCISSORS && playerSelection === ROCK){
                return "You Win! Rock beats Scissors";
            }
            else{
                return "You Lose! Scissors beats Paper";
            }
        }
    }else{
        // Input wasn't rock paper or scissors
        alert("Pick a valid choice")
    }
}
// Logs answers and winner
console.log(`Computer: ${computerSelection}`)
console.log(`Player: ${playerSelection}`)
console.log(playRound(playerSelection, computerSelection));