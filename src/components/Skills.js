import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <div className="head">
          <h3>Skills</h3>
          <button>Add</button>
        </div>
        <div className="body">
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java Script</li>
            <li>ReactJS</li>
          </ul>
        </div>
      </div>
    );
  }
}

export { Skills };
