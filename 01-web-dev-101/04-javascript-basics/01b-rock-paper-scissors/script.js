// create function computerPlay (randomly return ‘Rock’, ‘Paper’ or ‘Scissors’)
const multiplyES6 = (x, y) => { return x * y };





// create function RockGame
// funtion has two parameter (playerSelection, computerSelection)
const RockGame = (playerSelection, computerSelection) => { return x * y };


// RockGame function returns a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

// Make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)
// **Important note** : you want to return the results of this function call, not console.log() them. To test this function console.log the results:

function playRound(playerSelection, computerSelection) {
    // your code here!
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))
​

4. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
    1. At this point you should still just be using console.log() to display the results of each round and the winner at the end.
    2. Use prompt() to get input from the user. Read the docs here if you need to.
    3. Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
    4. Feel free to create more “helper” functions if you think it would be useful.