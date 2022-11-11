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
// still need to get the switching turns functionality working


function checkForWinner(player) {
    if (player.moves.includes(1) && player.moves.includes(2) && player.moves.includes(3) || 
        player.moves.includes(4) && player.moves.includes(5) && player.moves.includes(6) ||
        player.moves.includes(7) && player.moves.includes(8) && player.moves.includes(9) ||
        player.moves.includes(1) && player.moves.includes(4) && player.moves.includes(7) ||
        player.moves.includes(2) && player.moves.includes(5) && player.moves.includes(8) ||
        player.moves.includes(3) && player.moves.includes(6) && player.moves.includes(9) ||
        player.moves.includes(1) && player.moves.includes(5) && player.moves.includes(9) ||
        player.moves.includes(3) && player.moves.includes(5) && player.moves.includes(7)) {
        player.wins = true;
        console.log(`${player.name} wins!`)
        newGame.resetGame();
    } else {
        console.log(`It's a draw!`)
        // need a it's a draw case to happen only if the number of turns is 9
        newGame.resetGame();
    }
}


playerMove(playerOne, 1);
console.log(playerOne.moves);

playerMove(playerTwo, 5);
console.log(playerTwo.moves);

playerMove(playerOne, 2);
console.log(playerOne.moves);

playerMove(playerTwo, 3);
console.log(playerTwo.moves);

playerMove(playerOne, 7);
console.log(playerOne.moves);

playerMove(playerTwo, 4);
console.log(playerTwo.moves);
checkForWinner(playerTwo);

playerMove(playerOne, 9);
console.log(playerOne.moves);
checkForWinner(playerOne);

playerMove(playerTwo, 8);
console.log(playerTwo.moves);
checkForWinner(playerTwo);

playerMove(playerOne, 6);
console.log(playerOne.moves);
checkForWinner(playerOne);

// could have a function that only starts checking for winner once a certain number of turns have been played

