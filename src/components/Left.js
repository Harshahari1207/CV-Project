import React, { Component } from "react";
import { Contact } from "./Contact";
import { Skills } from "./Skills";
import { Interests } from "./Interests";
import img from "../img/myImage.jpg";

class Left extends Component {
    constructor() {
      super();
      this.state = {
        imgLoad: img,
      };
      // this.imgChanger =  onClick=this.imgChanger 
    }

  render() {
    return (
      <div className="left">
        
        <div className="profileImg">
          <img src={this.state.imgLoad}/>
        </div>
        <Contact />
        <Skills />
        <Interests />
      </div>
    );
  }
}

export { Left };
