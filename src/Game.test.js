const Game = require('./Game');

describe('Game', () => {
  it('Should create an instance of the game', () => {
    const game = new Game();
    expect(game).toBeDefined();
  });
  it('Should have 2 players when created', () => {
    const game = new Game();
    expect(game.players.length).toBe(2);
  });
  it('Should have a deck when created', () => {
    const game = new Game();
    expect(game.deck).toBeDefined();
  });
  it('Should have a board when created', () => {
    const game = new Game();
    expect(game.board).toBeDefined();
  });
  it('Should be able to start a game', () => {
    const game = new Game();
    expect(game.started).toBe(false);
    game.start();
    expect(game.started).toBe(true);
  });
  it('Should have a default state after starting', () => {
    const game = new Game();
    game.start();
    // TODO: write better tests
    expect(game.players[0].hand.length).toBe(2);
    expect(game.players[1].hand.length).toBe(2);
    expect(game.sharedCard).toBeDefined();
  });
});
