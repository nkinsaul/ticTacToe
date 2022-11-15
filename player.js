class Player {
    constructor(playerName) {
        this.name = playerName
        this.wins = 0;
        this.moves = [];
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