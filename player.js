class Player {
    constructor() {
        this.wins = 0;
        this.moves = [];
    }
    playerWon() {
        this.wins ++;
    }
    playerMove(move) {
        this.moves.push(move);
    }
}