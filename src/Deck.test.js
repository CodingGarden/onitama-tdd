const Deck = require('./Deck');

describe('Deck', () => {
  it('Should create an instance of the Deck', () => {
    const deck = new Deck();
    expect(deck).toBeDefined();
  });
  it('Should have cards', () => {
    const deck = new Deck();
    expect(deck.cards.length).toBeGreaterThan(0);
  });
  it('Should get a random card', () => {
    const deck = new Deck();
    const info = deck.getRandomCard();
    expect(typeof info.index).toBe('number');
    expect(info.index).toBeGreaterThanOrEqual(0);
    expect(info.index).toBeLessThanOrEqual(15);
    expect(info.card).toBeDefined();
  });
  it('Should deal a random card that is removed from the deck and placed in dealtCards', () => {
    const deck = new Deck();
    const card = deck.deal();
    expect(card).toBeDefined();
    expect(deck.cards.includes(card)).toBe(false);
    expect(deck.dealtCards.includes(card)).toBe(true);
  });
});
