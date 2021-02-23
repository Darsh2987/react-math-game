import React from "react";

const ProgressBar = (props) => {
  return (
    // Progress bar/boxes to show the amount of correct answers
    <div className="progress">
      <div className="boxes">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div id="progress-inner" className="progress-inner" style={{ transform: `scaleX(${props.score / 10})` }}></div>
    </div>
  );
};

export default ProgressBar;
