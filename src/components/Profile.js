import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      title: "",
      profile: "",
      edit: false,
    };
  }
  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleProfileChange = (e) => {
    this.setState({
      profile: e.target.value,
    });
  };
  render() {
    const { name, title, profile, edit } = this.state;
    return (
      <div className="profile">
        <div className="head1">
          <h2>{name ? name : "B Harsha"}</h2>
          <h3>{title ? title : "Web Developer"}</h3>
          <p>{profile ? profile : "I am passionate about Web Designing"}</p>
        </div>
        <button className="editToggle" type="button" onClick={this.toggleEdit}>
          Edit
        </button>
        {edit && (
          <div className="profileForm">
            <form>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={this.handleNameChange}
              />
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={this.handleTitleChange}
              />
              <label htmlFor="profile">Profile</label>
              <input
                type="text"
                id="profile"
                value={profile}
                onChange={this.handleProfileChange}
              />
              <button type="button" onClick={this.toggleEdit}>
                Close Edit 
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export { Profile };
