import React from "react";
import resumePNG from "../assets/documents/Resume.png";
import ResumePDF from "../assets/documents/Jasmin Hernandez - Resume.pdf";
import '../sass/Resume.scss'


class Resume extends React.Component {
  render() {
    return (
      <div className="resume-container">
        <img id="resume-img"
          src={resumePNG}
        />

        <a href={ResumePDF} download="JasminHernandez - Resume">
          <button type="button" id="download-btn">
            <i className="material-icons" style={{fontSize: '24px'}}>save_alt</i>
          </button>
        </a>
      </div>
    );
  }
}

export default Resume;
