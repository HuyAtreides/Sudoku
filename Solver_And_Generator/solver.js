const solver = (index, candidates, board, blankCells) => {
  if (index === blankCells.length) {
    return board;
  }
  let rowIndex = blankCells[index][0];
  let colIndex = blankCells[index][1];
  for (let i = 0; i < 9; i++) {
    const tmp = [candidates[i], rowIndex, colIndex];
    if (checkCell(tmp, board) && checkRow(tmp, board) && checkCol(tmp, board)) {
      board[rowIndex][colIndex] = candidates[i];
      if (solver(index + 1, candidates, board, blankCells)) return board;
      board[rowIndex][colIndex] = 0;
    }
  }
};

const countSolutions = (index, board, blankCells) => {
  let solutions = 0;
  const findAllSolutions = (index, board, blankCells) => {
    if (index === blankCells.length) {
      solutions += 1;
      if (solutions > 1) return true;
      return;
    }
    let rowIndex = blankCells[index][0];
    let colIndex = blankCells[index][1];
    for (let candidate = 1; candidate <= 9; candidate++) {
      const tmp = [candidate, rowIndex, colIndex];
      if (
        checkCell(tmp, board) &&
        checkRow(tmp, board) &&
        checkCol(tmp, board)
      ) {
        board[rowIndex][colIndex] = candidate;
        if (findAllSolutions(index + 1, board, blankCells)) return true;
        board[rowIndex][colIndex] = 0;
      }
    }
  };
  findAllSolutions(index, board, blankCells);
  return solutions;
};

const checkCell = ([number, row, col], board) => {
  const rowStart = Math.floor(row / 3) * 3;
  const colStart = Math.floor(col / 3) * 3;
  for (let i = rowStart; i < rowStart + 3; i++)
    for (let j = colStart; j < colStart + 3; j++)
      if (board[i][j] === number) return false;
  return true;
};

const checkCol = ([number, row, col], board) => {
  for (let i = 0; i < 9; i++) if (board[i][col] === number) return false;
  return true;
};

const checkRow = ([number, row, col], board) => {
  for (let i = 0; i < 9; i++) if (board[row][i] === number) return false;
  return true;
};

export { solver, countSolutions };
