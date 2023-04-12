import React from "react";

export default class Instruction extends React.Component {
  closeInstruction = () => {
    const instruct = document.querySelector(".instructionDiv");
    instruct.style.display = "none";
  };
  render() {
    return (
      <div className="instructionDiv">
        <div className="instructions">
          <h1>Instructions</h1>

          <ul>
            <li>Click on the Profile image to change image.</li>
            <li>
              Hover over any section that you need to edit it will show Button
              to edit that section.
            </li>
            <li>Click on the entries to remove any entries</li>
            <li>If you want to download Resume Press ctrl+p(Windows)</li>
            <li>Click on the Close button below to close Instructions.</li>
          </ul>
          <button onClick={this.closeInstruction}>Close</button>
        </div>
      </div>
    );
  }
}
