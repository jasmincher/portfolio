import React from 'react';
import '../sass/Notes.scss';


class Notes extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 'This is a text area' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className="notes-container">
                <textarea value={this.state.value} onChange={this.handleChange}></textarea>
            </div>
        )
    }

}

export default Notes;
