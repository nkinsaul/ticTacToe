// Query Selectors 👇🏻

var box1 = document.getElementById('1')
var box2 = document.getElementById('2')
var box3 = document.getElementById('3')
var box4 = document.getElementById('4')
var box5 = document.getElementById('5')
var box6 = document.getElementById('6')
var box7 = document.getElementById('7')
var box8 = document.getElementById('8')
var box9 = document.getElementById('9')
var buttons = document.getElementsByClassName('button')
var gameBoard = document.getElementById('game-board')
var playersTurn = document.getElementById('player-turn-emoji')
var gameBoardHeader = document.getElementById('game-board-header')

// Event Listeners 👇🏻

window.addEventListener('load', loadPage);

gameBoard.addEventListener('click', function(event) {
    if (!event.target.classList.contains('button')) {
        return;
    }
    playerMove(event);
})

// Global variables

var newGame = new Game;
var playerOne = newGame.createPlayers('playerOne');
var playerTwo = newGame.createPlayers('playerTwo');
var currentPlayerEmoji = ''

// Functions 👇🏻

function loadPage() {
    newGame.turn = playerOne.name;
    newGame.goesFirst = playerOne.name;
    updatePlayerEmoji();
}

function updatePlayerEmoji() {
    if (newGame.turn === playerOne.name) {
        currentPlayerEmoji = '🤖'
    } else if (newGame.turn === playerTwo.name) {
        currentPlayerEmoji = '🎃'
    }
    toggleGameBoardHeader();
}

function playerMove(event) {
    var boxId = (Number(event.target.id));
    if (newGame.turn === playerOne.name) {
        playerOne.playerMove(boxId);
        event.target.disabled = true; // prevents double clicking button
    } else if (newGame.turn === playerTwo.name) {
        playerTwo.playerMove(boxId);
        event.target.disabled = true; // prevents double clicking button
    }
    event.target.innerHTML += `${currentPlayerEmoji}`
    switchTurns();
    checkForWinner();
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

function checkForWinner() {
    if (playerOne.moves.includes(1) && playerOne.moves.includes(2) && playerOne.moves.includes(3) || 
        playerOne.moves.includes(4) && playerOne.moves.includes(5) && playerOne.moves.includes(6) ||
        playerOne.moves.includes(7) && playerOne.moves.includes(8) && playerOne.moves.includes(9) ||
        playerOne.moves.includes(1) && playerOne.moves.includes(4) && playerOne.moves.includes(7) ||
        playerOne.moves.includes(2) && playerOne.moves.includes(5) && playerOne.moves.includes(8) ||
        playerOne.moves.includes(3) && playerOne.moves.includes(6) && playerOne.moves.includes(9) ||
        playerOne.moves.includes(1) && playerOne.moves.includes(5) && playerOne.moves.includes(9) ||
        playerOne.moves.includes(3) && playerOne.moves.includes(5) && playerOne.moves.includes(7)) {
        playerOne.playerWon();
        newGame.gameWin = playerOne.name;
        disableAllButtons();
        setTimeout(restartGame, 3000);
        toggleGameBoardHeader();
    } else if (playerTwo.moves.includes(1) && playerTwo.moves.includes(2) && playerTwo.moves.includes(3) || 
               playerTwo.moves.includes(4) && playerTwo.moves.includes(5) && playerTwo.moves.includes(6) ||
               playerTwo.moves.includes(7) && playerTwo.moves.includes(8) && playerTwo.moves.includes(9) ||
               playerTwo.moves.includes(1) && playerTwo.moves.includes(4) && playerTwo.moves.includes(7) ||
               playerTwo.moves.includes(2) && playerTwo.moves.includes(5) && playerTwo.moves.includes(8) ||
               playerTwo.moves.includes(3) && playerTwo.moves.includes(6) && playerTwo.moves.includes(9) ||
               playerTwo.moves.includes(1) && playerTwo.moves.includes(5) && playerTwo.moves.includes(9) ||
               playerTwo.moves.includes(3) && playerTwo.moves.includes(5) && playerTwo.moves.includes(7)) {
               playerTwo.playerWon();
               newGame.gameWin = playerTwo.name;
               disableAllButtons();
               setTimeout(restartGame, 3000);
               toggleGameBoardHeader();
    } else if (newGame.moveCount === 9) {
        newGame.gameDraw = true;
        toggleGameBoardHeader();
        disableAllButtons();
        setTimeout(restartGame, 3000);
    }
}

function restartGame() {
    newGame.resetGame();
    playerOne.moves = [];
    playerTwo.moves = [];
    changeWhoGoesFirst();
    newGame.turn = newGame.goesFirst;
    updatePlayerEmoji();
    clearBoard();
    enableAllButtons();
    toggleGameBoardHeader();
}

function clearBoard() {
    box1.innerHTML = ''
    box2.innerHTML = ''
    box3.innerHTML = ''
    box4.innerHTML = ''
    box5.innerHTML = ''
    box6.innerHTML = ''
    box7.innerHTML = ''
    box8.innerHTML = ''
    box9.innerHTML = ''
}

function enableAllButtons () {
    for (var i=0; i<buttons.length; i++) {
        buttons[i].disabled = false;
    }
}

function disableAllButtons () {
    for (var i=0; i<buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function changeWhoGoesFirst () {
    if (newGame.goesFirst === playerOne.name) {
        newGame.goesFirst = playerTwo.name;
        return playerTwo.name;
    } else if (newGame.goesFirst === playerTwo.name) {
        newGame.goesFirst = playerOne.name;
       return playerOne.name;
    }
}

function toggleGameBoardHeader () {
    if (newGame.gameWin === playerOne.name) {
        gameBoardHeader.innerHTML = `🤖 Wins!`
    } else if (newGame.gameWin === playerTwo.name) {
        gameBoardHeader.innerHTML = `🎃 Wins!`
    } else if (newGame.gameDraw === true) {
        gameBoardHeader.innerHTML = `It's a draw!`;
    } else {
        gameBoardHeader.innerHTML = `It's <span class="player-turn-emoji" id="player-turn-emoji">${currentPlayerEmoji}</span>'s turn`
    }
}




// function addMoveToGameBoard(event) {
//     event.target.innerHTML += `${currentPlayerEmoji}`
// }

// function addMoveToMoveArray(event) {
//     var boxId = (Number(event.target.id));
//     if (newGame.turn === playerOne.name) {
//         playerOne.moves.push(Number(boxId));
//         console.log(playerOne.moves);
//     } else if (newGame.turn === playerTwo.name) {
//         playerTwo.moves.push(Number(boxId));
//         console.log(playerTwo.moves);
//     }
//     event.target.innerHTML += `${currentPlayerEmoji}`
// }


// function playerMove(event) {
//     if (newGame.turn === playerOne.name) {
//         playerOne.playerMove(event.target.id);
//         event.target.disabled = true;
//     } else if (newGame.turn === playerTwo.name) {
//         playerTwo.playerMove(event.target.id);
//         event.target.disabled = true;
//     }
//     switchTurns();
//     checkForWinner();
//     updatePlayerEmoji();
// }