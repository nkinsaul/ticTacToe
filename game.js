class Game {
    constructor() {
        this.turn = null;
        this.moveCount = 0;
        this.gameWin = false;
        this.gameDraw = false;
        this.playerOneMoves = [];
        this.playerTwoMoves = [];
        this.goesFirst = null;
    }
    createPlayers(playerName, token) {
        var newPlayer = new Player(playerName, token);
        return newPlayer;
    }
    playerMove(player, move) {
        if (player === playerOne) {
            this.playerOneMoves.push(move);
        } else if (player === playerTwo) {
            this.playerTwoMoves.push(move);
        }
    }
    resetGame() {
        this.turn = null;
        this.moveCount = 0;
        this.gameWin = false;
        this.gameDraw = false;
        this.player1Moves = [];
        this.player2Moves = [];
    }
}