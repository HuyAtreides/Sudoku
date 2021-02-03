import React from "react";
import "./GameControls.scss";
const createTooltip = (props) => {
  const style = {
    animationName: props.tooltip ? "appear" : "disappear",
    animationFillMode: "forwards",
    animationDuration: "0.5s",
  };
  const tooltip = (
    <div className="tooltip" style={style}>
      <p style={{ color: "#a4a3a8" }} id="announce">
        Current Game Progess <br></br>
        Will Be Lost
      </p>
      <p
        style={{ color: "#4a90e2" }}
        id="p"
        onClick={() => props.generateNewPuzzle(null, false)}
      >
        <strong>New Puzzle</strong>
      </p>
      <p
        style={{ color: "#4a90e2" }}
        id="p"
        onClick={() => props.generateNewPuzzle(null, true)}
      >
        <strong>Restart</strong>
      </p>
      <p style={{ color: "#dc3545" }} id="p" onClick={props.showTooltip}>
        <strong>Cancel</strong>
      </p>
    </div>
  );
  return tooltip;
};
const GameControls = (props) => {
  const numpads = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
    return (
      <div
        className={"numpad" + number}
        key={"numpad" + number}
        onClick={props.setValue}
        value={number}
      >
        {number}
      </div>
    );
  });
  const tooltip = createTooltip(props);
  return (
    <div className="game-controls">
      <div className="game-button" onClick={props.showTooltip}>
        New Game
      </div>
      <div className="number-pad">{numpads}</div>
      <div className="controls-pad">
        <div className="hint" onClick={props.showHint}>
          <i className="far fa-lightbulb "></i>
          Hint
        </div>
        <div className="erase" onClick={props.removeValue}>
          <i className="fas fa-eraser "></i>
          Erase
        </div>
        <div
          className="visualize"
          style={{
            backgroundColor: props.isVisualizing ? "rgb(187, 222, 251)" : "",
          }}
          onClick={props.visualize}
        >
          <i className="fas fa-chess-board"></i>
          Visualize
        </div>
      </div>
      {tooltip}
    </div>
  );
};
export default GameControls;
