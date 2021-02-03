import React from "react";
import "./GameInfo.scss";
import Timer from "./Timer.jsx";

const createDifficultySelector = (props) => {
  const style = {
    animationName: props.showSelector ? "appear" : "disappear",
    animationFillMode: "forwards",
    animationDuration: "0.5s",
  };
  const difficultySelector = (
    <div className="difficulty-selector" style={style}>
      <p value="Easy" onClick={props.setDifficulty}>
        Easy
      </p>
      <p value="Medium" onClick={props.setDifficulty}>
        Medium
      </p>
      <p value="Hard" onClick={props.setDifficulty}>
        Hard
      </p>
    </div>
  );
  return difficultySelector;
};

const GameInfo = (props) => {
  const className = props.showSelector ? "fa-angle-up" : "fa-angle-down";
  const difficultySelector = createDifficultySelector(props);
  return (
    <div className="game-info">
      <div id="difficulty">
        <strong>Difficulty: </strong>&nbsp;
        <span onClick={props.chooseDifficulty} id="chooseDifficulty">
          {props.difficulty} &nbsp;
          <i className={`fa ${className}`}></i>
        </span>
        {difficultySelector}
      </div>
      <div id="mistakes">
        <strong> Mistakes: </strong>&nbsp;
        <span>{`${props.mistakes}/3`}</span>
      </div>
      <Timer
        generating={props.generating}
        time={props.time}
        startTimer={props.startTimer}
        start={props.start}
      />
    </div>
  );
};

export default GameInfo;
