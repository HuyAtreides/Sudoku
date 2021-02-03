import React from "react";
import "./Timer.scss";

const Timer = (props) => {
  const minute = Math.floor(props.time / 60).toString();
  const clocklifyMinute = minute.length < 2 ? "0" + minute : minute;
  const second = (props.time % 60).toString();
  const clocklifySecond = second.length < 2 ? "0" + second : second;
  const className = props.start && !props.generating ? "fa-pause" : "fa-play";
  return (
    <div id="timer">
      <span>{clocklifyMinute + ":" + clocklifySecond} &nbsp;</span>
      <div id="circle" style={{ color: "#a4a3a8" }} onClick={props.startTimer}>
        <i className={`fa ${className}`}></i>
      </div>
    </div>
  );
};

export default Timer;
