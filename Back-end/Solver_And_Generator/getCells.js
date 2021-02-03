const getBlankCells = (board) => {
  let blankCells = [];
  board.forEach((row, i) => {
    row.forEach((colVal, j) => {
      if (colVal === 0) blankCells.push([i, j]);
    });
  });
  return blankCells;
};

const getPositions = (board) => {
  let positions = [];
  board.forEach((row, i) => {
    row.forEach((colVal, j) => {
      positions.push([i, j]);
    });
  });
  return positions;
};

export { getBlankCells, getPositions };
