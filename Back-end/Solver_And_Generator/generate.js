import permutator from "./getPermutations.js";
import solve from "./solve.js";
import { getPositions } from "./getCells.js";

const generatePuzzule = (board, positions, difficulty) => {
  while (true) {
    let puzzle = removeCellValue(board, positions, difficulty);
    let [solvedPuzzle, solutions] = solve(puzzle, null);
    if (solutions === 1) return solvedPuzzle;
  }
};
const removeCellValue = (board, positions, difficulty) => {
  let clonePositions = positions.reduce((accumulator, row) => {
    accumulator.push([...row]);
    return accumulator;
  }, []);
  let cloneBoard = board.reduce((accumulator, row) => {
    accumulator.push([...row]);
    return accumulator;
  }, []);
  const blankCells = { Easy: 41, Medium: 48, Hard: 50 };
  let attemps = blankCells[difficulty];
  while (attemps > 0) {
    let i = Math.floor(Math.random() * clonePositions.length);
    let rowIndex = clonePositions[i][0];
    let colIndex = clonePositions[i][1];
    if (cloneBoard[rowIndex][colIndex] !== 0) {
      cloneBoard[rowIndex][colIndex] = 0;
      attemps -= 1;
    }
    clonePositions.splice(i, 1);
  }
  return cloneBoard;
};
const generate = (difficulty) => {
  const board = new Array(9).fill([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const permutaions = permutator([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const positions = getPositions(board);
  const random = Math.floor(Math.random() * permutaions.length);
  let solvedBoard = solve(board, permutaions[random]);
  let puzzle = generatePuzzule(solvedBoard, positions, difficulty);
  return puzzle;
};

export default generate;
