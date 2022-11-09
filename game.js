class Game {
    constructor() {
        this.turn = player1;
        this.gameWin = false;
        this.gameDraw = false;
        this.player1Choices = [];
        this.player2Choices = [];
    }
    createPlayers() {
        var playerOne = new Player;
        var playerTwo = new Player;
    }
    resetGame() {
        this.turn = player1;
        this.gameWin = false;
        this.gameDraw = false;
        this.player1Choices = [];
        this.player2Choices = [];
    }
}