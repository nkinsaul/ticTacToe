var newGame = new Game;
var playerOne = newGame.createPlayers('playerOne');
var playerTwo = newGame.createPlayers('playerTwo');

newGame.turn = playerOne.name;
console.log(newGame);

newGame.playerOneMoves.push(2);
newGame.playerTwoMoves.push(5);