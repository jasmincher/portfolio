import React from "react";
import ResumePDF from "../assets/documents/Jasmin Hernandez - Resume.pdf";
import "../sass/Resume.scss";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import "react-pdf/dist/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      resize: null,
    };
  }

  componentDidMount() {
    this.resizeScreen();
    window.addEventListener("resize", this.resizeScreen.bind(this));
  }

  resizeScreen() {
    let width = window.innerWidth; //width of window

    if (width >= 1200) {
      this.setState({ resize: 1000 });
    } else if (width >= 992) {
      this.setState({ resize: 882 });
    } else if (width >= 768) {
      this.setState({ resize: 658 });
    } else if (width >= 480) {
      this.setState({ resize: 380 });
    } else {
      this.setState({ resize: 300 });
    }
  }

  render() {
    const { pageNumber } = this.state;

    return (
      <div className="resume-container">
        <Document
          file={ResumePDF}
          loading="Loading Resume..."
          externalLinkTarget="_blank"
          >
          <Page pageNumber={pageNumber} width={this.state.resize} className="pdf" />
        </Document>

        <a href={ResumePDF} download="JasminHernandez - Resume">
          <button type="button" id="download-btn">
            <i className="material-icons" style={{ fontSize: "24px" }}>
              save_alt
            </i>
          </button>
        </a>
      </div>
    );
  }
}

export default Resume;
