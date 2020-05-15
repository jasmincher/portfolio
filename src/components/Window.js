import React, { Fragment } from "react";
import "../sass/Window.scss";
import Draggable from "react-draggable";

class Window extends React.Component {
  render() {
    
    return (
      //handles where to drag component
      <Draggable handle={this.props.handle} bounds="parent" cancel={this.props.cancel}>
        <div className="window-container" id={this.props.ID}>{this.props.children}</div>
      </Draggable>
    );
  }
}

export default Window;
