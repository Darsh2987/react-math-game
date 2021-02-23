import React, { useState, useEffect, useRef } from "react";

function Main() {
  const [currentProblem, setCurrentProblem] = useState(generateProblem());
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showError, setShowError] = useState(false);
  const answerField = useRef(null);
  const resetButton = useRef(null);

  // useEffect to set focus on reset button so you can press enter(keyboard) as well as clicking it(mouse)
  useEffect(() => {
    if (score === 10 || mistakes === 3) {
      setTimeout(() => resetButton.current.focus(), 331);
    }
  }, [score, mistakes]);

  // Function to generate random number - used to randomly generate number 1, number 2 and the operator
  function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  // Function to call the "generateNumber() function" to create random number's 1 and 2 and a random operator and store them as an object
  function generateProblem() {
    return {
      numberOne: generateNumber(10),
      numberTwo: generateNumber(10),
      operator: ["+", "-", "x"][generateNumber(2)],
    };
  }

  let correctAnswer;

  // If statemetent to calculate the correct answer depending on the operator
  if (currentProblem.operator === "+") {
    correctAnswer = currentProblem.numberOne + currentProblem.numberTwo;
  } else if (currentProblem.operator === "-") {
    correctAnswer = currentProblem.numberOne - currentProblem.numberTwo;
  } else if (currentProblem.operator === "x") {
    correctAnswer = currentProblem.numberOne * currentProblem.numberTwo;
  }

  // Funtion to handle submit button
  function handleSubmit(e) {
    e.preventDefault();

    answerField.current.focus(); // Focus the input field when you click submit

    if (userAnswer == parseInt(correctAnswer)) {
      setScore((prev) => prev + 1); // Increment "score state" by 1
      setCurrentProblem(generateProblem()); // Generate new Math problem
      setUserAnswer(""); // Clear the users input field
    } else {
      setMistakes((prev) => prev + 1); // Increment "mistake state" by 1
      setShowError(true); // Used to animate the math problem text when you get a questin wrong
      setTimeout(() => setShowError(false), 401); // Used to animate the math problem text when you get a questin wrong
    }
  }

  // Function for the overlay reset button to reset the game
  function resetGame() {
    setScore(0); // set "score state" back to 0
    setMistakes(0); // set "mistakes state" back to 0
    setUserAnswer(""); // clear the users input field
    setCurrentProblem(generateProblem()); // Generate new Math problem
  }

  return (
    <div>
      <div className={"main-ui" + (mistakes === 3 || score === 10 ? " blurred" : "")}>
        {/* Math Problem */}
        <p id="problem" className={"problem" + (showError ? " animate-wrong" : "")}>
          {currentProblem.numberOne} {currentProblem.operator} {currentProblem.numberTwo}
        </p>
        {/* Form */}
        <form id="form" className="form" onSubmit={handleSubmit} action="">
          <input
            id="input"
            className="input"
            type="text"
            autoComplete="off"
            value={userAnswer}
            ref={answerField}
            onChange={(e) => {
              setUserAnswer(e.target.value);
            }}
          />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
        {/* Status Description */}
        <p className="status">
          You need <span id="points-needed">{10 - score}</span> points to win, and are allowed to make <span id="mistakes-allowed">{2 - mistakes}</span> mistakes.
        </p>
        {/* Game Notes */}
        <p className="notes">*Division problem's should be rounded to 1 decimal place, for example 0.66666667 should be answered as 0.7.</p>

        {/* Progress bar/boxes to show the amount of correct answers */}
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
          <div id="progress-inner" className="progress-inner" style={{ transform: `scaleX(${score / 10})` }}></div>
        </div>
      </div>

      {/* Overlay- win or lose message */}
      <div className={"overlay" + (mistakes === 3 || score === 10 ? " overlay--visible" : "")}>
        <div className="overlay-inner">
          <p id="end-message" className="end-message">
            {score === 10 ? "Congrats! You won." : "Sorry! You lost."}
          </p>
          <button id="reset-button" className="reset-button" ref={resetButton} onClick={resetGame}>
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
