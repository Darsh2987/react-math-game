import React from "react";

const MathProblem = (props) => {
  return (
    <div>
      {/* Math Problem */}
      <p id="problem" className={"problem" + (props.showError ? " animate-wrong" : "")}>
        {props.currentProblem.numberOne} {props.currentProblem.operator} {props.currentProblem.numberTwo}
      </p>
    </div>
  );
};

export default MathProblem;
