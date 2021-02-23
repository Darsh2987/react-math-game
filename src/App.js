import { useState, useEffect, useRef } from "react";

import "./App.scss";

import MathProblem from "./components/MathProblem";
import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar";
import Overlay from "./components/Overlay";
import Status from "./components/Status";

function App() {
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

  // Funcstion to handle submit button
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
      setTimeout(() => setShowError(false), 401); // Used to animate the math problem text when you get a question wrong
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
    <div className="App">
      <div className={"main-ui" + (mistakes === 3 || score === 10 ? " blurred" : "")}>
        <MathProblem showError={showError} currentProblem={currentProblem} />
        <Form handleSubmit={handleSubmit} setUserAnswer={setUserAnswer} userAnswer={userAnswer} answerField={answerField} />
        <Status score={score} mistakes={mistakes} />
        <ProgressBar score={score} />
      </div>

      <Overlay score={score} mistakes={mistakes} resetButton={resetButton} resetGame={resetGame} />
      <div />
    </div>
  );
}

export default App;
