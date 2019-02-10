import React, { Fragment } from "react";

function Welcome() {
  return (
    <Fragment>
      <div className="container">
        <span className="welcome">
          Welcome to Medium! Medium is a publishing platform where people can
          read important, insightful stories on the topics that matter most to
          them and share ideas with the world.
        </span>
        <div className="buttons">
          <button className="logIn">Log In</button>
          <span className="or">OR</span>
          <button className="signUp">Sign Up</button>
        </div>
      </div>
    </Fragment>
  );
}

export default Welcome;
