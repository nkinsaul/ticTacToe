class Player {
    constructor(playerName, token) {
        this.name = playerName
        this.wins = 0;
        this.moves = [];
        this.token = token;
    }
    playerWon() {
        this.wins ++;
    }
    playerMove(move) {
        this.moves.push(move);
    }
    resetGame(player) {
        this.moves = [];
    }
}