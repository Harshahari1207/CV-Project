import React, { Component } from "react";

class Interests extends Component {
  render() {
    return (
      <div className="interests">
        <div className="head">
          <h3>Interests</h3>
          <button>Add</button>
        </div>
        <div className="body">
          <ul>
            <li>Playing Cricket</li>
            <li>Playing Badminton </li>
            <li>Listening songs</li>
          </ul>
        </div>
      </div>
    );
  }
}

export { Interests };
