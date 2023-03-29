

import React, { Component } from "react";
import uniqid from "uniqid";

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skill: "",
      skills: [
        {
          id: uniqid(),
          skill: "C",
        },
        {
          id: uniqid(),
          skill: "C++",
        },
        {
          id: uniqid(),
          skill: "JAVA",
        },
        {
          id: uniqid(),
          skill: "JavaScript",
        },
        {
          id: uniqid(),
          skill: "HTML",
        },
        {
          id: uniqid(),
          skill: "CSS",
        },
        {
          id: uniqid(),
          skill: "ReactJS",
        },
      ],
      edit: false,
    };
  }

  handleSkillChange = (e) => {
    this.setState({
      skill: e.target.value,
    });
  };
  onSubmitSkill = (e) => {
    e.preventDefault();
    this.setState({
      skills: this.state.skills.concat({
        id: uniqid(),
        skill: this.state.skill,
      }),
      skill: "",
    });
    this.toggleEdit();
  };
  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  handleRemove = (key) => {
    const newSkills = this.state.skills.filter((skill) => skill.id !== key);

    this.setState({
      skills: newSkills,
    });
  };
  render() {
    const { skill, skills, edit } = this.state;
    return (
      <div className="skills">
        <div className="head1">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill) => {
              return (
                <li key={skill.id} onClick={() => this.handleRemove(skill.id)}>
                  {skill.skill}{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <button className="editToggle" type="button" onClick={this.toggleEdit}>
          Add
        </button>
        {edit && (
          <div className="skillForm">
            <form>
              <label htmlFor="skills">Skill</label>
              <input
                id="skills"
                type="text"
                value={skill}
                onChange={this.handleSkillChange}
              />
              <div className="formButtons">
                <button type="button" onClick={this.onSubmitSkill}>
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

export { Skills }; 

