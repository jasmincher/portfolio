import React from "react";
import "../sass/Notes.scss";

class Notes extends React.Component {
  render() {
    return (
      <div
        className="notes-container"
        contentEditable="true"
        spellcheck="false"
      >
        <p>Write down any notes here...</p>

        <p>Did you know? </p>
        <p>
          That the AMBER Alert is a backronym for America's missing: Broadcast
          Emergency Response, named after Amber Hagerman, a 9 year old girl who
          was abducted and murdered in Arlington, Texas, in 1996.
        </p>
      </div>
    );
  }
}

export default Notes;
