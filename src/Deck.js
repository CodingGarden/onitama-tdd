const Card = require('./Card');

class Deck {
  constructor() {
    this.cards = [];
    this.dealtCards = [];
    for (let i = 0; i < 16; i += 1) {
      this.cards.push(new Card());
    }
  }

  getRandomCard() {
    const index = Math.floor(this.cards.length * Math.random());
    const card = this.cards[index];
    return {
      index,
      card,
    };
  }

  deal() {
    const { index, card } = this.getRandomCard();
    this.cards.splice(index, 1);
    this.dealtCards.push(card);
    return card;
  }
}

module.exports = Deck;
