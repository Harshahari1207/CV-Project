import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="head">
          <h2>B Harsha</h2>
          <button>Edit</button>
        </div>
        <div className="body">
          <h3>Web Developer</h3>
          <p>I am Passionate about Web Designing</p>
        </div>
      </div>
    );
  }
}

export { Profile };
