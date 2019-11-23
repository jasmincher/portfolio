import React from 'react';
import Icon from './Icon';
import '../sass/Section.scss'



function Section(props) {

    const items = props.icons.map(i => <Icon window={i.window} title={i.title} icon={i.icon}  onIconClick={props.onItemClick.bind(this, i)} />)

    return (
        <div className="icons">
           {items}
        </div>
    );
}

export default Section;