import React, { Component } from "react";
import "../sass/Settings.scss";

class Dropwdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleOptions = this.toggleOptions.bind(this);
  }

  //changes previous state to true or false
  toggleOptions() {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { name, children } = this.props;
    const display = isOpen ? "grid" : "none"; //displays grid if isOpen is true, else displays to none
    const arrow = isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down";

    return (
      <div className="dropdown-item">
        {/* onclick changes the direction of the arrow */}
        <div onClick={this.toggleOptions}>
          {name}

          <i className="material-icons" style={{top: "5px"}}> {arrow} </i>
        </div>

        <div className="background-options" style={{ display }}>
          {children}
        </div>
        
      </div>
    );
  }
}

export default Dropwdown;
