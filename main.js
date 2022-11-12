var newGame = new Game;
var playerOne = newGame.createPlayers('playerOne');
var playerTwo = newGame.createPlayers('playerTwo');
newGame.turn = playerOne.name;

function playerMove(player, move) {
    player.playerMove(move);
    newGame.playerMove(player, move);
    switchTurns();
    checkForWinner(playerOne);
    checkForWinner(playerTwo);
}

function switchTurns() {
    if (newGame.turn === playerOne.name) {
        newGame.turn = playerTwo.name;
        newGame.moveCount ++
    } else if (newGame.turn === playerTwo.name) {
        newGame.turn = playerOne.name;
        newGame.moveCount ++
    }
}

function restartGame() {
    newGame.resetGame();
    playerOne.moves = [];
    playerTwo.moves = [];
    newGame.turn = playerOne.name;
}

function checkForWinner(player) {
    if (player.moves.includes(1) && player.moves.includes(2) && player.moves.includes(3) || 
        player.moves.includes(4) && player.moves.includes(5) && player.moves.includes(6) ||
        player.moves.includes(7) && player.moves.includes(8) && player.moves.includes(9) ||
        player.moves.includes(1) && player.moves.includes(4) && player.moves.includes(7) ||
        player.moves.includes(2) && player.moves.includes(5) && player.moves.includes(8) ||
        player.moves.includes(3) && player.moves.includes(6) && player.moves.includes(9) ||
        player.moves.includes(1) && player.moves.includes(5) && player.moves.includes(9) ||
        player.moves.includes(3) && player.moves.includes(5) && player.moves.includes(7)) {
        console.log(`${player.name} wins!`)
        player.playerWon();
        restartGame();
    } else if (newGame.moveCount === 9) {
        console.log(`It's a draw!`)
        restartGame();
    }
}

// playerMove(playerOne, 1);
// console.log(playerOne.moves);
// switchTurns();
// console.log(newGame);

// playerMove(playerTwo, 5);
// console.log(playerTwo.moves);
// switchTurns();
// console.log(newGame);

// playerMove(playerOne, 2);
// console.log(playerOne.moves);
// switchTurns();
// console.log(newGame);

// playerMove(playerTwo, 3);
// console.log(playerTwo.moves);
// switchTurns();
// console.log(newGame);

// playerMove(playerOne, 7);
// console.log(playerOne.moves);
// switchTurns();
// console.log(newGame);   

// playerMove(playerTwo, 4);
// console.log(playerTwo.moves);
// checkForWinner(playerTwo);
// switchTurns();
// console.log(newGame);

// playerMove(playerOne, 8);
// console.log(playerOne.moves);
// checkForWinner(playerOne);
// switchTurns();
// console.log(newGame);

// playerMove(playerTwo, 6);
// console.log(playerTwo);
// checkForWinner(playerTwo);
// switchTurns();
// console.log(newGame);
// console.log(playerOne);
// console.log(playerTwo)

