const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
function computerPlay(){
    computerSelection = Math.floor(Math.random() *3);
    switch(computerSelection){
        case 0:
            computerSelection = ROCK;
            break;
        case 1:
            computerSelection = PAPER;
            break;
        case 2:
            computerSelection = SCISSORS;
            break;
    }
    console.log(computerSelection)
}
computerPlay()