import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      email: "",
      linkedIn: "",
      edit: false,
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
      
    }));
  };

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  handleEmailChange = (e) => {
    console.log("Email")
    this.setState({
      email: e.target.value,
    });
  };
  handlelinkedInChange = (e) => {
    console.log("linkedIn")
    this.setState({
      linkedIn: e.target.value,
    });
  };

  render() {
    const { phone, email, linkedIn, edit } = this.state;
    return (
      <div className="contact">
        <div className="head1">
          <h3>Contact Info</h3>

          <div className="phone">
            <h4>Phone </h4>
            <p>{phone ? phone : "8247349639"}</p>
          </div>
          <div className="email">
            <h4>Email </h4>
            <p>{email ? email : "harsha733084@gmial.com"}</p>
          </div>
          <div className="linkedin">
            <h4>LinkedIn </h4>
            <p>www.linkedin.com/in/{linkedIn ? linkedIn : "userName"}</p>
          </div>
        </div>
        <button className="editToggle" onClick={this.toggleEdit}>
          Edit
        </button>
        {edit && (
          <div className="contactForm">
            <form>
              <label htmlFor="phn">Phn Number: </label>
              <input
                type="number"
                id="phn"
                placeholder="8247349639"
                onChange={this.handlePhoneChange}
              />
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                placeholder="example12@gmail.com"
                onChange={this.handleEmailChange}
              />
              <label htmlFor="linkedIn">LinkedIn: </label>
              <input
                type="text"
                id="linkedIn"
                placeholder="userName"
                onChange={this.handlelinkedInChange}
              />

              <button type="button" onClick={this.toggleEdit}>Close Edit</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export { Contact };
