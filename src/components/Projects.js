import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h3>Projects</h3>
        <div className="projectsContents">
          <h4>Tic Tac Toe Web App</h4>
          <p>
            The Tic Tac Toe Web App is a game for two players, called "X" and
            "O", who take turns marking the spaces in a 3x3 grid. The player who
            succeeded in placing three respective marks in a horizontal,
            vertical, or diagonal row wins the game. 
          </p>
        </div>
      </div>
    );
  }
}

export { Projects };
