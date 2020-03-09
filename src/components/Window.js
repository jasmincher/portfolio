import React, { Fragment } from "react";
import "../sass/Window.scss";
import Draggable from "react-draggable";

class Window extends React.Component {
  render() {

    return (
      //handles where to drag component
      <Draggable handle={this.props.handle} bounds="parent">
        <div className="window-container">{this.props.children}</div>
      </Draggable>
    );
  }
}

export default Window;
