import React, { Component } from "react";
import uniqid from "uniqid";
class Interests extends Component {
  constructor() {
    super();
    this.state = {
      interest: "",
      interests: [
        {
          id: uniqid(),
          interest: "Playing Cricket",
        },
        {
          id: uniqid(),
          interest: "Playing Badminton",
        },
        {
          id: uniqid(),
          interest: "Listning Music",
        },
      ],
      edit: false,
    };
  }
  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };
  handleRemove = (key) => {
    const newInterests = this.state.interests.filter(
      (interest) => interest.id !== key
    );
    this.setState({
      interests: newInterests,
    });
  };
  handleInterestChange = (e) => {
    this.setState({
      interest: e.target.value,
    });
  };
  onSubmitInterest = (e) => {
    e.preventDefault();
    this.setState({
      interests: this.state.interests.concat({
        id: uniqid(),
        interest: this.state.interest,
      }),
      interest: "",
    });
    this.toggleEdit();
  };
  render() {
    const { interest, interests, edit } = this.state;
    return (
      <div className="interests">
        <div className="head1">
          <h3>Interests</h3>
          <ul>
            {interests.map((interest) => {
              return (
                <li
                  key={interest.id}
                  onClick={() => this.handleRemove(interest.id)}
                >
                  {interest.interest}
                </li>
              );
            })}
          </ul>
        </div>
        <button className="editToggle" type="button" onClick={this.toggleEdit}>
          Add
        </button>
        {edit && (
          <div className="interestForm">
            <form>
              <label htmlFor="interests">interest</label>
              <input
                id="interests"
                type="text"
                value={interest}
                onChange={this.handleInterestChange}
              />
              <div className="formButtons">
                <button type="button" onClick={this.onSubmitInterest}>
                  Add
                </button>
                <button type="button" onClick={this.toggleEdit}>
                  close
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export { Interests };
