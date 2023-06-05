//three potential moves
const moves = ["Rock", "Paper", "Scissors"];

//computer and player are random
const computerIndex = Math.floor(Math.random() * moves.length);
const playerIndex = Math.floor(Math.random() * moves.length);

//message string
let message = "Player " + moves[playerIndex] + " vs Computer " + moves[computerIndex] + ".";

//log game state
console.log(message)

//tie case
if (playerIndex == computerIndex){
    message = "It is a tie";
}
//next element beats previous element except for the final element
else if ((playerIndex == computerIndex + 1) || (playerIndex + 2 == computerIndex)){
    message = 'You win.'
}
//if you don't win or tie, you lose
else{
    message = 'You lose.'
}

//log game result
console.log(message)