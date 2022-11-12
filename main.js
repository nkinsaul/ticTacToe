// Query Selectors 👇🏻

var box1 = document.getElementById('box-1')
var box2 = document.getElementById('box-2')
var box3 = document.getElementById('box-3')
var box4 = document.getElementById('box-4')
var box5 = document.getElementById('box-5')
var box6 = document.getElementById('box-6')
var box7 = document.getElementById('box-7')
var box8 = document.getElementById('box-8')
var box9 = document.getElementById('box-9')

// Event Listeners 👇🏻

window.addEventListener("load", loadPage);
box1.addEventListener('click', test);
box2.addEventListener('click', test);
box3.addEventListener('click', test);
box4.addEventListener('click', test);
box5.addEventListener('click', test);
box6.addEventListener('click', test);
box7.addEventListener('click', test);
box8.addEventListener('click', test);
box9.addEventListener('click', test);

// Global variables

var newGame = new Game;
var playerOne = newGame.createPlayers('playerOne');
var playerTwo = newGame.createPlayers('playerTwo');


// Functions 👇🏻

function test() {
    console.log('I am a button!')
}

function loadPage() {
    newGame.turn = playerOne.name;
}

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
    console.log('New Game')
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
        setTimeout(restartGame(), 50000);
    } else if (newGame.moveCount === 9) {
        console.log(`It's a draw!`)
        restartGame();
    }
}

