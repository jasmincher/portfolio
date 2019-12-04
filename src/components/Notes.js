import React from 'react';
import '../sass/Notes.scss';


class Notes extends React.Component {

    render() {
        return (
            <div className="notes-container">
                <textarea> This is a text area</textarea>
            </div>
        )
    }

}

export default Notes;
