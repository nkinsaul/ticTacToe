class Game {
    constructor() {
        this.turn = null;
        this.gameWin = false;
        this.gameDraw = false;
        this.player1Moves = [];
        this.player2Moves = [];
    }
    createPlayers() {
        var newPlayer = new Player;
        return newPlayer;
    }
    resetGame() {
        this.turn = player1;
        this.gameWin = false;
        this.gameDraw = false;
        this.player1Moves = [];
        this.player2Moves = [];
    }
}