const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

rock_div.addEventListener('click', function() {
	console.log("hey you clicked on rock");
})

paper_div.addEventListener('click', function() {
	console.log("hey you clicked on paper");
})

scissors_div.addEventListener('click', function() {
	console.log("hey you clicked on scissors");
})





































// ======================================================== //
// userChoice is declared
const userChoice = prompt ("Do you choose rock, paper or scissors?");



// create function computerPlay (randomly return ‘Rock’, ‘Paper’ or ‘Scissors’)
const multiplyES6 = (x, y) => { return x * y };

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}



// create function RockGame
// funtion has two parameter (playerSelection, computerSelection)
const RockGame = (playerSelection, computerSelection) => { return x * y };

switch(expression) {
  case 0:  // if (x === 0) tie
    "You Lose! Paper beats Rock!"
    [break]
  case 1:  // if (x === 1) rock
    "You Lose! Paper beats Rock!"
    [break]
  case 2:  // if (x === 2) paper
    "You Lose! Paper beats Rock!"
    [break]
  case 3:  // if (x === 3) scissors
    "You Lose! Paper beats Rock!"
    [break]
}

// RockGame function returns a string that declares the winner of the round like so: "You Lose! Paper beats Rock!"

// Make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)
// **Important note** : you want to return the results of this function call, not console.log() them. To test this function console.log the results:

function playRound(playerSelection, computerSelection) {
    // your code here!
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))
​

Write a NEW function called game(). 
const game = (playerSelection, computerSelection) => { return x * y };

(for loop) Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
    - Use prompt() to get input from the user. Read the docs here if you need to.



// for loop
for (let i = Things.length - 1; i < 6; i++) {
	Things[i]
}





