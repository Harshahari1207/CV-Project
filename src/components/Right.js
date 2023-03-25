import React, { Component } from "react";
import { Profile } from "./Profile";
import { Projects } from "./Projects";
import { Education } from "./Education";

class Right extends Component {
  render() {
    return (
      <div className="right">
        {/* <h2>Right</h2> */}
        <Profile />
        <div className="main">
          <Projects />
          <Education />
        </div>
      </div>
    );
  }
}

export { Right };
