import React, { Component } from "react";
import { Contact } from "./Contact";
import { Skills } from "./Skills";
import { Interests } from "./Interests";
import ProfileImg from "./ProfileImg";

class Left extends Component {
    
  render() {
    return (
      <div className="left">
        
        <div className="profileImg">
          <ProfileImg/>
        </div>
        <Contact />
        <Skills />
        <Interests />
      </div>
    );
  }
}

export { Left };
