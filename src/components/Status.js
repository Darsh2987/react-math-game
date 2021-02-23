import React from "react";

const Status = (props) => {
  return (
    <div>
      {/* Status Description */}
      <p className="status">
        You need <span id="points-needed">{10 - props.score}</span> points to win, and are allowed to make <span id="mistakes-allowed">{2 - props.mistakes}</span> mistakes.
      </p>
    </div>
  );
};

export default Status;
