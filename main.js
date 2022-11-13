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
var gameBoard = document.getElementById('game-board')

// Event Listeners 👇🏻

window.addEventListener("load", loadPage);


gameBoard.addEventListener('click', function(event) {
    addMoveToGameBoard(event);
    addMoveToMoveArray(event);
    playerMove(event);
})

// Global variables

var newGame = new Game;
var playerOne = newGame.createPlayers('playerOne');
var playerTwo = newGame.createPlayers('playerTwo');
var currentPlayerEmoji = ''
updatePlayerEmoji();



// Functions 👇🏻

function updatePlayerEmoji() {
    if (newGame.turn === playerOne.name) {
        currentPlayerEmoji = '🤖'
    } else if (newGame.turn === playerTwo.name) {
        currentPlayerEmoji = '🎃'
    }
}

function addMoveToGameBoard(event) {
    event.target.innerHTML += `${currentPlayerEmoji}`
}

function addMoveToMoveArray(event) {
    var boxId = event.target.id;
    console.log(boxId);
    if (newGame.turn === playerOne.name) {
        playerOne.moves.push(Number(boxId));
    } else if (newGame.turn === playerTwo.name) {
        playerTwo.moves.push(Number(boxId));
    }
}

function loadPage() {
    newGame.turn = playerOne.name;
    updatePlayerEmoji();
}

function playerMove(event) {
    if (newGame.turn === playerOne.name) {
        playerOne.playerMove(event.target.id);
    } else if (newGame.turn === playerTwo.name) {
        playerTwo.playerMove(event.target.id);
    }
    switchTurns();
    checkForWinner(playerOne);
    checkForWinner(playerTwo);
    updatePlayerEmoji();
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
        setTimeout(restartGame, 5000);
    } else if (newGame.moveCount === 9) {
        console.log(`It's a draw!`)
        restartGame();
    }
}


