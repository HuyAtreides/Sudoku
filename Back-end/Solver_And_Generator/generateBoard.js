import generate from "./generate.js";
import solve from "./solve.js";
import { getBlankCells } from "./getCells.js";

const generateBoard = (difficulty) => {
  const board = generate(difficulty);
  const sudokuBoard = board.map((row) => {
    const sudokuBoardRow = row.map((value) => ({
      value: value,
      focus: "",
      wrong: false,
      hint: true,
      sameValue: false,
    }));
    return sudokuBoardRow;
  });
  return [
    solve(board, [1, 2, 3, 4, 5, 6, 7, 8, 9]),
    sudokuBoard,
    getBlankCells(board),
  ];
};

export default generateBoard;
