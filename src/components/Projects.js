// import React from "react";
// import "../sass/Projects.scss";
// import { Folder, FolderOpen } from "grommet-icons";
// import { Links } from "../assets/data/Projects";

// class Projects extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       preview: false,
//       pane: "hidden-pane",
//       projectLink: null,
//       image: null,
//     };
//   }

//   previewPane = (link, image) => {
//     if (this.state.preview === false) {
//       this.setState({ preview: true, pane: "pane" });
//     }
//     this.setState({ projectLink: link, image: image });
//   };

//   render() {
//     const projects = Links.map((i) => (
//       <div className="project-name">
//         <Folder
//           color="plain"
//           size="small"
//           style={{ marginRight: "5px", alignSelf: "center" }}
//         />
//         <div onClick={() => this.previewPane(i.href, i.image)}>
//           {i.projectName}
//         </div>
//       </div>
//     ));

//     return (
//       <div
//         className={
//           this.state.preview === false
//             ? "projects-container"
//             : "with-preview-pane"
//         }
//       >
//         <div className="projects-list">{projects}</div>

//         <div className={this.state.pane}>
//           <a href={this.state.projectLink} target="_blank">
//             <button>visit</button>
//           </a>

//           <img src={this.state.image} style={{ width: "100px" }} />
//         </div>
//       </div>
//     );
//   }
// }

// export default Projects;
import React from "react";
import "../sass/Projects.scss";
import { Folder } from "grommet-icons";

import { Links } from "../assets/data/Projects";

class Projects extends React.Component {


  
  render() {
    const projects = Links.map(i => (
      <li>
        <Folder color="plain" size="small" style={{marginRight: '5px'}} />
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