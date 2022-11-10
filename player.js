class Player {
    constructor(playerName) {
        this.name = playerName
        this.wins = 0;
    }
    playerWon() {
        this.wins ++;
    }
}