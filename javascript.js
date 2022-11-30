/* Rock Paper Scissors game Pseudocode

1) getComputerChoice function to activate computer
2) Write a function with 2 parameters (playerSelection,computerSelection)
return a string to declare winner "You lose!" || "you lost"
    •make playerSelection case-insensitive!
3)return the results of this function call.
4) write a NEW function called game().
5)call playround function inside of game() to play a 5 round game with LOOPS
*/

function getComputerChoice () {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random()*choice.length)];

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function round (playerSelection, computerSelection){
    playerSelection.toLowerCase;
    if (playerSelection === computerSelection){
        return "It's a tie";
    }
    else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose!";
    }
    else {
        return "You Win";
    }
}

function game (){
    for (let i = 0; i < 5; i++){
        console.log(round());
    }
}

