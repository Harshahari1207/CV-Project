import React, { Component } from "react";
import uniqid from "uniqid";
class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projectTitle: "",
      description: "",
      projects: [
        {
          id: uniqid(),
          projectTitle: "Tic Tac Toe",
          description:
            "The Tic Tac Toe Web App is a game for two players, called 'X' and 'O', who take turns marking the spaces in a 3x3 grid. The player who succeeded in placing three respective marks in a horizontal, vertical, or diagonal row wins the game.",
        },
      ],
      edit: false,
    };
  }

  handleProjectNameChange = (e) => {
    this.setState({
      projectTitle: e.target.value,
    });
  };
  handleDescripionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  onSubmiProjects = (e) => {
    e.preventDefault();
    this.setState({
      projects: this.state.projects.concat({
        id: uniqid(),
        projectTitle: this.state.projectTitle,
        description: this.state.description,
      }),
      projectTitle: "",
      description: "",
    });
    this.toggleEdit();
  };
  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };
  handleRemove = (key) => {
    const newProjects = this.state.projects.filter(
      (project) => project.id !== key
    );
    this.setState({
      projects: newProjects,
    });
  };
  render() {
    const { projects, projectTitle, description, edit } = this.state;
    return (
      <div className="projects">
        <div className="head1">
          <h3>Projects</h3>
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => this.handleRemove(project.id)}
              >
                <h4>{project.projectTitle}</h4>
                <p>{project.description} </p>
              </div>
            );
          })}
        </div>
        <button className="editToggle" onClick={this.toggleEdit}>
          Edit
        </button>
        {edit && (
          <div className="projectsForm">
            <form>
              <label htmlFor="project_name">Project Name</label>
              <input
                type="text"
                id="project_name"
                onChange={this.handleProjectNameChange}
              />
              <label htmlFor="description">Description</label>
              <input
                type="textarea"
                id="description"
                onChange={this.handleDescripionChange}
              />
              <div className="formButtons">
                <button type="button" onClick={this.onSubmiProjects}>
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

export { Projects };
