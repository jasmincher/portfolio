import React from 'react';
import '../sass/Icon.scss';


function Icon(props) {
  
    return (
       
        <div className="icon-container" onClick={props.onIconClick}>
            <img src={props.icon} className="icon-img" />
            <p className="icon-title">{props.title}</p>
        </div>
       
    )
}

export default Icon; 