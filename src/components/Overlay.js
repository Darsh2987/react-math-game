import React from "react";

const Overlay = (props) => {
  return (
    // Overlay- win or lose message
    <div className={"overlay" + (props.mistakes === 3 || props.score === 10 ? " overlay--visible" : "")}>
      <div className="overlay-inner">
        <p id="end-message" className="end-message">
          {props.score === 10 ? "Congrats! You won." : "Sorry! You lost."}
        </p>
        <button id="reset-button" className="reset-button" ref={props.resetButton} onClick={props.resetGame}>
          Start Over
        </button>
      </div>
    </div>
  );
};

export default Overlay;
