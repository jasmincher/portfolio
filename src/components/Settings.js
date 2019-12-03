import React from 'react';
import '../sass/Projects.scss'


class Settings extends React.Component {


    changeColor = (color) => {
        switch (color) {
            case 'blue':
                document.body.style.background = "blue";
                break;
            case 'red':
                document.body.style.background = "red";
                break;
            default:
                document.body.style.background = "yellow";
                break;
        }
    }


    render() {

        return (

            <div className="settings-container">
                <h6>Desktop</h6>
                
                <div className="desktop-preview"></div>
                
                <ul>

                    <li onClick={() => this.changeColor('blue')}>change to blue 
                    <div className="color-preview"></div>
                    </li>
                    
                    <li onClick={() => this.changeColor('red')}> change to red 
                    <div className="color-preview"></div>
                    </li>

                    <li onClick={() => this.changeColor('idk')}> change to another color
                    <div className="color-preview"></div>
                    </li>


                </ul>
            </div>

        )
    }
}


export default Settings;