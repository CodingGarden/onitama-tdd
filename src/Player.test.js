const Player = require("./Player");
const Card = require("./Card");

describe('Player', () => {
  it('Should create an instance of a player', () => {
    const player = new Player();
    expect(player).toBeDefined();
  });
  it('Should deal a card to a player', () => {
    const player = new Player();
    player.dealCard(new Card());
    expect(player.hand.length).toBe(1);
    player.dealCard(new Card());
    expect(player.hand.length).toBe(2);
  });
});
