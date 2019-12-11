import React from "react";
import "../sass/Settings.scss";
import { gradients, colors } from "../assets/data/Colors";
import Dropwdown from "./Dropdown";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: gradients[0].color
    };
  }

  //sets state to change color
  changeColor = color => {
    this.setState({
      color: color
    });
  };

  //condtionally render and map through backgrounds from object
  renderBackgrounds = backgrounds => {
    return backgrounds.map(i => (
      <div
        style={{ background: i.color }}
        onClick={() => this.changeColor(i.color)}
      ></div>
    ));
  };

  render() {
    return (
      <div className="settings-container">
        {/* displays desktop preview and color is changed here before changing the body background */}
        <div
          className="desktop-preview"
          style={{ background: this.state.color }}
        ></div>
        <h6>Desktop</h6>

        {/* displays background options, in a dropdown menu  */}
        <div className="dropdown-list">
          <Dropwdown name="Gradients">
            {this.renderBackgrounds(gradients)}
          </Dropwdown>

          <Dropwdown name="Solid Colors">
            {this.renderBackgrounds(colors)}
          </Dropwdown>
          {/* images */}
        </div>

        <button
          className="apply-btn"
          onClick={() => (document.body.style.background = this.state.color)}
        >
          Apply Color
        </button>
      </div>
    );
  }
}

export default Settings;
