import React from 'react';
import '../sass/Projects.scss'
import { Chrome } from 'grommet-icons';
import { Links } from '../assets/data/Projects';

class Projects extends React.Component {

  render() {

    return (

      <div className="projects-container">

        <p>Name</p>

        <ul>

          {Links.map(i => (
            <li> <Chrome color="plain" size="small"/> <a href={i.href} target="_blank">{i.projectName}</a></li>
          ))}

        </ul>

      </div>
    )
  }
}


export default Projects;