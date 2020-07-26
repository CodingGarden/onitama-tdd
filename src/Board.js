const PieceTypes = require('./constants/PieceTypes');
const Colors = require('./constants/Colors');

class Board {
  constructor() {
    const length = 5;
    this.grid = [];
    Array.from({ length }, () => (
      // TODO: put the correct pieces in the correct place...
      this.grid.push(new Array(length).fill({ type: PieceTypes.MASTER }))
    ));
  }

  getPiece(rank, file) {
    const numRow = rank.charCodeAt() - 65;
    const numCol = file - 1;
    return this.grid[numRow][numCol];
  }
}

module.exports = Board;
