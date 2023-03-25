import React, { Component } from "react";
import { Contact } from "./Contact";
import { Skills } from "./Skills";
import { Interests } from "./Interests";

class Left extends Component {
  //   constructor() {
  //     super();
  //     this.state = {};
  //   }

  render() {
    return (
      <div className="left">
        
        <div className="profileImg">
          <h2>Image</h2>
        </div>
        <Contact />
        <Skills />
        <Interests />
      </div>
    );
  }
}

export { Left };
