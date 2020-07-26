const Piece = require('./Piece');
const PieceTypes = require('./constants/PieceTypes');
const Colors = require('./constants/Colors');

describe('Piece', () => {
  it('Should create an instance of a piece', () => {
    const piece = new Piece();
    expect(piece).toBeDefined();
  });
  it('Should have a type', () => {
    const piece = new Piece(PieceTypes.PAWN);
    expect(piece.type).toBe(PieceTypes.PAWN);
  });
  it('Should have a color', () => {
    const piece = new Piece(PieceTypes.PAWN, Colors.RED);
    expect(piece.color).toBe(Colors.RED);
  });
});
