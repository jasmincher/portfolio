import React from 'react';
import '../sass/Settings.scss'
import variables from '../sass/Settings.scss'


const gradients = [{ color: variables.defaultcolor }, { color: variables.gradient1 }, { color: variables.gradient2 }, { color: variables.gradient3 }, { color: variables.gradient4 }];


class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: variables.defaultcolor,
            show: true
        };
    }

    changeColor = (color) => {
        this.setState({
            color: color
        })
    }


    toggleOptions = (id) => {
        this.setState({
            show: !this.state.show
        })

        if (this.state.show == true) {
            document.getElementById(id).style.display = "grid";

        } else {
            document.getElementById(id).style.display = "none";
        }
    }



    renderGradients = () => {
        console.log(variables)
        return (
            <div className="colors-option" id="colors-option">
                {gradients.map(i => (
                    <div style={{ background: i.color }} onClick={() => this.changeColor(i.color)}></div>))}

            </div>
        )
    }


    render() {
        return (

            <div className="settings-container">

                <div className="desktop-preview" style={{ background: this.state.color }}></div>
                <h6>Desktop</h6>

                <div className="options">
                    <ul>
                        <li onClick={() => this.toggleOptions('colors-option')}>Gradients</li>
                        {this.renderGradients()}

                        <li>Colors</li>

                        <li>Images</li>

                    </ul>
                </div>


                <button className="apply-btn" onClick={() => document.body.style.background = this.state.color}>Apply Color</button>

            </div>

        )
    }
}


export default Settings;