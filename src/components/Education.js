import React, { Component } from "react";
import uniqid from "uniqid";
class Education extends Component {
  constructor() {
    super();
    this.state = {
      qualification: "",
      fromTo: "",
      college: "",
      branch: "",
      classes: [
        {
          id: uniqid(),
          qualification: "Bachelores of Technology",
          fromTo: "July 2018 to may 2022",
          college: "Birla Institute of Technology, Mesra",
          branch: "Electronics and Communication Engineering",
        },
      ],
      edit: false,
    };
  }
  handleQualificationChange = (e) => {
    this.setState({
      qualification: e.target.value,
    });
  };
  handleFromToChange = (e) => {
    this.setState({
      fromTo: e.target.value,
    });
  };
  handleCollegeChange = (e) => {
    this.setState({
      college: e.target.value,
    });
  };
  handleBranchChange = (e) => {
    this.setState({
      branch: e.target.value,
    });
  };
  onSubmitEducation = (e) => {
    e.preventDefault();
    this.setState({
      classes: this.state.classes.concat({
        id: uniqid(),
        qualification: this.state.qualification,
        fromTo: this.state.fromTo,
        college: this.state.college,
        branch: this.state.branch,
      }),
      qualification: "",
      fromTo: "",
      college: "",
      branch: "",
    });
    this.toggleEdit();
  };
  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };
  handleRemove = (key) => {
    const newClasses = this.state.classes.filter((a) => a.id !== key);
    this.setState({
      classes: newClasses,
    });
  };
  render() {
    const { classes, edit } = this.state;
    return (
      <div className="education">
        <div className="head1">
          <h3>Education</h3>
          {classes.map((a) => {
            return (
              <div key={a.id} onClick={() => this.handleRemove(a.id)}>
                <h4>{a.qualification} </h4>
                <p>{a.fromTo} </p>
                <p>{a.college} </p>
                <p>{a.branch} </p>
              </div>
            );
          })}
        </div>
        <button className="editToggle" onClick={this.toggleEdit}>
          Edit
        </button>
        {edit && (
          <div className="educationForm">
            <form>
              <label htmlFor="qualification">Qualification</label>
              <input
                type="text"
                id="qualification"
                
                onChange={this.handleQualificationChange}
                placeholder="Degree"
              />
              <label htmlFor="fromTo">FromTo</label>
              <input
                type="text"
                id="fromTO"
                
                onChange={this.handleFromToChange}
                placeholder="July 2018 to May 2022"
              />
              <label htmlFor="college">College</label>
              <input
                type="text"
                id="college"
                
                onChange={this.handleCollegeChange}
                placeholder="BIT, Mesra"
              />
              <label htmlFor="branch">Branch</label>
              <input
                type="text"
                id="branch"
                
                onChange={this.handleBranchChange}
                placeholder="ECE"
              />
              <div className="formButtons">
                <button type="button" onClick={this.onSubmitEducation}>
                  Add
                </button>
                <button type="button" onClick={this.toggleEdit}>
                  Close
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export { Education };
