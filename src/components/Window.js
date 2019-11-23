import React from 'react';
import '../sass/Window.scss';
import { Rnd } from 'react-rnd';

class Window extends React.Component {

    render() {
        return (

            <Rnd>
        
                <div className="window-container">
                    {this.props.children} 
                </div>

            </Rnd>
        )
    }
}





export default Window;