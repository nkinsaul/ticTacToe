var newGame = new Game;
var playerOne = newGame.createPlayers('playerOne');
var playerTwo = newGame.createPlayers('playerTwo');

newGame.turn = playerOne.name;
console.log(newGame);


function playerMove(player, move) {
    player.playerMove(move);
    newGame.playerMove(player, move);
}

function switchTurns() {
    if (newGame.turn === playerOne) {
        newGame.turn = playerTwo;
    } else if (newGame.turn === playerTwo) {
        newGame.turn = playerOne;
    }
}

// create a for loop that will check the moves in the array
// I think it makes more sense to check in the players array 
// it can be more dynamic.
// If the numbers in each players array is 


function checkForWinner() {
    for 
}