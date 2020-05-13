import React from "react";
import "../sass/Notes.scss";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: `Did you know? 

That the AMBER Alert is a backronym for America's missing: Broadcast Emergency Response, named after Amber Hagerman, a 9 year old girl who was abducted and murdered in Arlington, Texas, in 1996`,
    };
  }

  componentDidMount() {
    const notes = localStorage.getItem("notes") || this.state.notes;
    document.getElementById("notepad").value = notes;
  }

  changeNotes() {
    const notes = document.getElementById("notepad").value;
    localStorage.setItem("notes", notes);
  }

  render() {
    return (
      <div className="notes-container" spellCheck="false">
        <textarea id="notepad" onChange={() => this.changeNotes()}></textarea>
      </div>
    );
  }
}

export default Notes;
