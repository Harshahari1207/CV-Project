import React, { Component } from "react";
import { Profile } from "./Profile";
import { Projects } from "./Projects";
import { Education } from "./Education";

class Right extends Component {
  render() {
    return (
      <div className="main">
        <h2>Right</h2>
        <Profile />
        <div className="subMain">
          <Projects />
          <Education />
        </div>
      </div>
    );
  }
}

export { Right };
