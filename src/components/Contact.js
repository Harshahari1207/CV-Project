import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="head">
          <h3>Contact Info</h3>
          <button>Add</button>
        </div>
        <div className="body">
          <p>+918247349639</p>
          <p>harsha733084@gmial.com</p>
          <p>LinkedIn Profile link</p>
        </div>
      </div>
    );
  }
}

export { Contact };
