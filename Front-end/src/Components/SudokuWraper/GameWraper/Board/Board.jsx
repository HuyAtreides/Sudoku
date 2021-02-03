import React from "react";
import "./Board.scss";

const createPauseState = (props) => {
  const boardState = (
    <div className="pause">
      <i className="fa fa-play fa-2x" onClick={props.startTimer}></i>
    </div>
  );
  return boardState;
};

const createGameoverState = (props) => {
  const boardState = (
    <div className="gameover">
      <p style={{ color: "#344861" }}>
        <strong>Game Over</strong>
      </p>
      <p style={{ color: "#7c7d7a" }}>
        You have made 3 mistakes <br></br> and lost this game
      </p>
      <p
        style={{ color: "rgb(74, 144, 226)", cursor: "pointer" }}
        onClick={() => props.generateNewPuzzle(null, true)}
      >
        <strong>try again</strong>
      </p>
    </div>
  );
  return boardState;
};

const createSolvedState = (props) => {
  const minute = Math.floor(props.time / 60).toString();
  const clocklifyMinute = minute.length < 2 ? "0" + minute : minute;
  const second = (props.time % 60).toString();
  const clocklifySecond = second.length < 2 ? "0" + second : second;
  const boardState = (
    <div className="solved">
      <p style={{ color: "#344861" }}>
        <strong>You Have Solved The Puzzle!</strong>
      </p>
      <p style={{ color: "#7c7d7a" }}>
        <strong>Time: </strong>
        {clocklifyMinute + ":" + clocklifySecond} <br></br>
        <strong>Difficulty: </strong>
        {props.difficulty} <br></br>
        <strong>Mistakes: </strong>
        {props.mistakes}
      </p>
      <p
        style={{ color: "rgb(74, 144, 226)", cursor: "pointer" }}
        onClick={() => props.generateNewPuzzle(null, false)}
      >
        <strong>New Puzzle</strong>
      </p>
    </div>
  );
  return boardState;
};

const createBoardState = (props) => {
  if (props.generating) return <div className="spinner"></div>;
  if (!props.start && props.mistakes !== 3 && props.blankCells !== 0)
    return createPauseState(props);
  else if (props.mistakes === 3) return createGameoverState(props);
  else if (props.blankCells === 0) return createSolvedState(props);
  return null;
};

const getColor = (cell, type, props) => {
  switch (type) {
    case "color":
      if (
        (!props.start || !cell.value || props.mistakes === 3) &&
        props.blankCells !== 0
      )
        return "transparent";
      if (!cell.hint) return "#5996f7";
      if (cell.wrong) return "rgb(220, 53, 69)";
      return "";
    case "background":
      if (!props.start || props.mistakes === 3 || props.blankCells === 0)
        return "";
      if (cell.sameValue) return "#cbdbed";
      if (cell.focus === "inDomain") return "#e2e7ed";
      if (cell.focus === "target") return "#bbdefb";
      break;
    default:
      return null;
  }
};

const createSudokuBoard = (props) => {
  const sudokuBoard = props.board.map((row, rowIndex) => {
    const cells = row.map((cell, colIndex) => {
      const style = {
        color: getColor(cell, "color", props),
        backgroundColor: getColor(cell, "background", props),
      };
      return (
        <div
          className={`col${colIndex}`}
          key={`col${colIndex}`}
          style={style}
          col={colIndex}
          onClick={props.focus}
          value={cell.value}
        >
          {cell.value ? cell.value : 0}
        </div>
      );
    });
    return (
      <div className={`row${rowIndex}`} key={`row${rowIndex}`} row={rowIndex}>
        {cells}
      </div>
    );
  });
  return sudokuBoard;
};

const Board = (props) => {
  const sudokuBoard = createSudokuBoard(props);
  const boardState = createBoardState(props);
  return (
    <div className="board">
      {sudokuBoard}
      {boardState}
    </div>
  );
};

export default Board;
