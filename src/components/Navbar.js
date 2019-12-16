import React from "react";
import "../sass/Navbar.scss";
import { Clock } from "grommet";
import { NavLink } from "reactstrap";

class Navbar extends React.Component {
  
  render() {
    return (
      <div className="nav-container">
        <NavLink exact to="/">
          <i className="material-icons" style={{ fontSize: "1.3rem" }}>
            home
          </i>
        </NavLink>

        <Clock
          alignSelf="center"
          hourLimit={12}
          size="small"
          type="digital"
          style={{ marginLeft: "auto", color: "black", fontWeight: "400" }}
        />
      </div>
    );
  }
}

export default Navbar;
