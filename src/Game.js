const Player = require('./Player');
const Deck = require('./Deck');
const Board = require('./Board');

class Game {
  constructor() {
    this.started = false;
    this.currentPlayerIndex = 0;
    this.players = [new Player(), new Player()];
    this.deck = new Deck();
    this.board = new Board();
  }

  get currentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  finishTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
  }

  dealCard() {
    this.currentPlayer.dealCard(this.deck.deal());
    this.finishTurn();
  }

  start() {
    for (let i = 0; i < 4; i += 1) {
      this.dealCard();
    }
    this.sharedCard = this.deck.deal();
    this.started = true;
  }
}

module.exports = Game;
