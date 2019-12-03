import React from 'react';
import '../sass/Window.scss';
import Draggable from 'react-draggable';


class Window extends React.Component{

    render() {

        return (

            <Draggable>
                <div className="window-container">
                    {this.props.children}
                </div>
            </Draggable>
        )
    }
}




export default Window;