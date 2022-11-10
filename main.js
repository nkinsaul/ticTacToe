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
// If the numbers in each players array contains a winning
// combination, then that player will be declared winner


function checkForWinner(playerMoves) {
    for (var i = 0; i < playerMoves.length; i++) {
        if (playerMoves.includes(1) && playerMoves.includes(2) && playerMoves.includes(3) || 
            playerMoves.includes(4) && playerMoves.includes(5) && playerMoves.includes(6) ||
            playerMoves.includes(7) && playerMoves.includes(8) && playerMoves.includes(9) ||
            playerMoves.includes(1) && playerMoves.includes(4) && playerMoves.includes(7) ||
            playerMoves.includes(2) && playerMoves.includes(5) && playerMoves.includes(8) ||
            playerMoves.includes(3) && playerMoves.includes(6) && playerMoves.includes(9) ||
            playerMoves.includes(1) && playerMoves.includes(5) && playerMoves.includes(9) ||
            playerMoves.includes(3) && playerMoves.includes(5) && playerMoves.includes(7)) {
            console.log(`You won`)
        } else {
            console.log(`You didn't win.`)
        }
    }
}


playerMove(playerOne, 1);
checkForWinner(playerOne.moves)  

playerMove(playerTwo, 2);
checkForWinner(playerTwo.moves)

playerMove(playerOne, 4);
checkForWinner(playerOne.moves)

playerMove(playerTwo, 7);
checkForWinner(playerTwo.moves)

playerMove(playerOne, 5);
checkForWinner(playerOne.moves); 

playerMove(playerTwo, 9);
checkForWinner(playerTwo.moves);

playerMove(playerOne, 6);
checkForWinner(playerOne.moves);