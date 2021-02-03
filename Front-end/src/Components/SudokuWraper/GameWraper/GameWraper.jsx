import React from "react";
import "./GameWraper.scss";
import Board from "./Board/Board.jsx";
import GameControls from "./GameControls/GameControls.jsx";

const GameWraper = (props) => {
  const numpads = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
    return (
      <div
        className={"numpad" + number}
        key={"numpad" + number}
        onClick={props.setValue}
        value={number}
        id={"numpad" + number}
      >
        {number}
      </div>
    );
  });
  return (
    <div className="game-wraper">
      <Board
        board={props.board}
        start={props.start}
        startTimer={props.startTimer}
        focus={props.focus}
        showHint={props.showHint}
        mistakes={props.mistakes}
        generateNewPuzzle={props.generateNewPuzzle}
        blankCells={props.blankCells}
        time={props.time}
        generating={props.generating}
        difficulty={props.difficulty}
      />
      <GameControls
        generateNewPuzzle={props.generateNewPuzzle}
        setValue={props.setValue}
        showTooltip={props.showTooltip}
        tooltip={props.tooltip}
        removeValue={props.removeValue}
        showHint={props.showHint}
        visualize={props.visualize}
        isVisualizing={props.isVisualizing}
      />
      <div className="controls-pad-mobile">
        <div className="hint" onClick={props.showHint}>
          <i className="far fa-lightbulb "></i>
          Hint
        </div>
        <div className="visualize" onClick={props.visualize}>
          <i className="fas fa-chess-board"></i>
          Visualize
        </div>
        <div className="erase" onClick={props.removeValue}>
          <i className="fas fa-eraser "></i>
          Erase
        </div>
      </div>
      <div className="number-pad-mobile">{numpads}</div>
    </div>
  );
};

export default GameWraper;
