import React from "react";
import "../sass/Projects.scss";
import { Chrome } from "grommet-icons";
import { Links } from "../assets/data/Projects";

class Projects extends React.Component {


  
  render() {
    const projects = Links.map(i => (
      <li>
        <Chrome color="plain" size="small" style={{marginRight: '5px'}} />
        <a href={i.href} target="_blank">
          {i.projectName}
        </a>
      </li>
    ))

    return (
      <div className="projects-container">
        <div className="file-details">
          <h6 style={{ fontSize: "12px", marginBottom: "5px" }}>Name</h6>
        </div>
        <ul>
          {projects}
        </ul>
      </div>
    );
  }
}

export default Projects;
