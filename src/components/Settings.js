import React from "react";
import "../sass/Settings.scss";
import { gradients, colors, images } from "../assets/data/Colors";
import Dropwdown from "./Dropdown";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    };
  }

  //sets color for preview window
  componentDidMount() {
    const color = localStorage.getItem("color") || gradients[0].color;
    this.setState({ color });
  }

  //sets state to change color
  changeColor = color => {
    this.setState({ color: color });
    // localStorage.setItem('color', this.state.color);
  };

  changeBackground() {
    const { color } = this.state;
    localStorage.setItem("color", color);
    document.body.style.background = color;
  }

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
        <p style={{ fontSize: "12px", marginBottom: "5px" }}>Desktop</p>

        {/* displays background options, in a dropdown menu  */}
        <div className="dropdown-list">
          <Dropwdown name="Gradients">
            {this.renderBackgrounds(gradients)}
          </Dropwdown>

          <Dropwdown name="Solid Colors">
            {this.renderBackgrounds(colors)}
          </Dropwdown>
          
          
          <Dropwdown name="Pictures">
            {this.renderBackgrounds(images)}
          </Dropwdown>
        </div>

        <button
          className="apply-btn"
          onClick={() => this.changeBackground()}
        >
          Apply Color
        </button>
      </div>
    );
  }
}

export default Settings;
