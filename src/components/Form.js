import React from "react";

const Form = (props) => {
  return (
    <div>
      {/* Form */}
      <form id="form" className="form" onSubmit={props.handleSubmit} action="">
        <input
          id="input"
          className="input"
          type="text"
          autoComplete="off"
          value={props.userAnswer}
          ref={props.answerField}
          onChange={(e) => {
            props.setUserAnswer(e.target.value);
          }}
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
