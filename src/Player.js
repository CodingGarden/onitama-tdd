class Player {
  constructor() {
    this.hand = [];
  }

  dealCard(card) {
    this.hand.push(card);
  }
}

module.exports = Player;
