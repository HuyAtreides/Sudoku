import { solver, countSolutions } from "./solver.js";
import { getBlankCells } from "./getCells.js";

const solve = (board, candidates) => {
  const cloneBoard = board.reduce((accumulator, row) => {
    accumulator.push([...row]);
    return accumulator;
  }, []);
  const blankCells = getBlankCells(cloneBoard);
  if (candidates !== null) {
    solver(0, candidates, cloneBoard, blankCells);
    return cloneBoard;
  } else {
    let solutions = countSolutions(0, cloneBoard, blankCells);
    return [cloneBoard, solutions];
  }
};

export default solve;
