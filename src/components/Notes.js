import React from "react";
import "../sass/Notes.scss";

class Notes extends React.Component {
  render() {
    return (
      <div className="notes-container">
        <textarea>
          Write down any notes here...
   
        </textarea>
      </div>
    );
  }
}

export default Notes;
