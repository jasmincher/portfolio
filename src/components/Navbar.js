import React from 'react';
import { NavLink } from 'react-router-dom';



class Navbar extends React.Component{
    render(){
        return (
            <div>
                <NavLink exact to="/"> Home </NavLink>
                <NavLink to="/projects"> Projects </NavLink>

            </div>

        )
    }

}

export default Navbar;