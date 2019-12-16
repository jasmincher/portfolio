import React from "react";
import resumePNG from "../assets/documents/Resume.png";
import ResumePDF from "../assets/documents/Jasmin Hernandez - Resume.pdf";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <img
          src={resumePNG}
          style={{ width: "400px", height: "500px", borderRadius: "5px" }}
        />

        <a href={ResumePDF} download="JasminHernandez - Resume">
          <button type="button" style={{bottom: '0',right: '0', position: 'absolute', background: 'unset', border: 'unset'}}>
            <i className="material-icons" style={{fontSize: '24px'}}>save_alt</i>
          </button>
        </a>
      </div>
    );
  }
}

export default Resume;
