import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <div className="head">
          <h3>Education</h3>
          <button>Edit</button>
        </div>
        <div className="body">
          <h4>Bachelores of Technology</h4>
          <ul>
            <li>Birla Institute of Technology, Mesra(2022 Completed)</li>
            <li>Electronics and Communication Engineering</li>
          </ul>
        </div>
      </div>
    );
  }
}

export { Education };
