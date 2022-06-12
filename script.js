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

// Selects button classes 
const player = document.querySelector(".player");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// Buttons for player to choose rock paper or scissors
rockBtn.addEventListener('click', playerChoice);
paperBtn.addEventListener('click', playerChoice);
scissorsBtn.addEventListener('click', playerChoice);

// Button functionality
function playerChoice(){
    // Rock Button
    rockBtn.onclick = ()=>{
        let playerSelection = ROCK;
        let computerSelection = computerPlay();
        console.log(`Computer: ${computerChoice}`);
        console.log("Player: Rock");
        return console.log(playRound(playerSelection, computerSelection));
    }
    // Paper Button
    paperBtn.onclick = ()=>{
        let playerSelection = PAPER;
        let computerSelection = computerPlay();
        console.log(`Computer: ${computerChoice}`);
        console.log("Player: Paper");
        return console.log(playRound(playerSelection, computerSelection));
    }
    // Scissors Button
    scissorsBtn.onclick = () =>{
        let playerSelection = SCISSORS;
        let computerSelection = computerPlay();
        console.log(`Computer: ${computerChoice}`);
        console.log("Player: Scissors");
        return console.log(playRound(playerSelection, computerSelection));
    }
}

// Game logic
function playRound(playerSelection, computerSelection){
        // the logic in case computer chooses rock
        if (computerSelection === ROCK && playerSelection === PAPER){
            document.querySelector(".computer").innerText = `${computerSelection}`
            return document.querySelector(".battle").innerText = "You Win! Paper beats Rock";
        }else if(computerSelection === ROCK && playerSelection === SCISSORS){
            document.querySelector(".computer").innerText = `${computerSelection}`
            return document.querySelector(".battle").innerText = "You Lose! Rock beats Scissors";
        // the logic in case computer chooses paper
        }else if(computerSelection === PAPER && playerSelection === ROCK){
            document.querySelector(".computer").innerText = `${computerSelection}`
            return document.querySelector(".battle").innerText = "You Lose! Paper beats Rock";
        }else if(computerSelection === PAPER && playerSelection === SCISSORS){
            document.querySelector(".computer").innerText = `${computerSelection}`
            return document.querySelector(".battle").innerText = "You Win! Scissors beats Paper";
        // the logic in case computer chooses scissors
        }else if(computerSelection === SCISSORS && playerSelection === ROCK){
            document.querySelector(".computer").innerText = `${computerSelection}`
            return document.querySelector(".battle").innerText = "You Win! Rock beats Scissors";
        }else if (computerSelection === SCISSORS && playerSelection === PAPER){
            document.querySelector(".computer").innerText = `${computerSelection}`
            return document.querySelector(".battle").innerText = "You Lose! Scissors beats Paper";
        // Checks for a tie
        }else{
            document.querySelector(".computer").innerText = `${computerSelection}`
            return document.querySelector(".battle").innerText = "It\'s a Tie!";
        }
}