/* Rock Paper Scissors game Pseudocode

1) getComputerChoice function to activate computer
2) Write a function with 2 parameters (playerSelection,computerSelection)
return a string to declare winner "You lose!" || "you lost"
    •make playerSelection case-insensitive!
3)return the results of this function call.
4) write a NEW function called game().
5)call playround function inside of game() to play a 5 round game with LOOPS
*/

const computerSelection = getComputerChoice();
const playerSelection = "rock";
let countPlayer = 0;
let countComputer = 0;

function getComputerChoice () {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random()*choice.length)];
}

function round (playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = prompt("rock, paper, scissors").toLowerCase();
    if (playerSelection === computerSelection){
        alert ("It's a tie");
        return 3;
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        alert ("You Lose this round!");
        countComputer++;
        return 1;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        alert("You Win this round!");
        countPlayer++;
        return 2;
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
    if (countPlayer > countComputer){
        alert("You Win")
    }
    else if (countComputer > countPlayer){
        alert("You Lose")
    }
    else{
        alert("Tie")
    }
}

console.log(game());