const Board = require('./Board');
const PieceTypes = require('./constants/PieceTypes');
const Colors = require('./constants/Colors');

describe('Board', () => {
  it('Should create an instance of the board', () => {
    const board = new Board();
    expect(board).toBeDefined();
  });
  it('Should have a 5x5 grid', () => {
    const board = new Board();
    const length = 5;
    expect(board.grid.length).toBe(length);
    Array.from({ length }, (_, rowNum) => (
      expect(board.grid[rowNum].length).toBe(length)
    ));
  });
  it('Should have a red master piece at row A col 3', () => {
    const board = new Board();
    const piece = board.getPiece('A', 3);
    expect(piece).toBeDefined();
    expect(piece.type).toBe(PieceTypes.MASTER);
    expect(piece.color).toBe(Colors.RED);
  });
});
