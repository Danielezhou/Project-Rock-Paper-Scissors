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
const computerSelection = getComputerChoice();
const playerSelection = "rock";

function round (playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = prompt("rock, paper, scissors").toLowerCase();
    if (playerSelection === computerSelection){
        alert ("It's a tie");
        return "It's a tie";
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        alert ("You Lose!");
        return "You Lose";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        alert("You Win!");
        return ;
    }
    else {
        alert(Error);
        return -1;
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        round(playerSelection,computerSelection);
    }
}

console.log(game());