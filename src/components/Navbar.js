import React from 'react';
import { NavLink } from 'react-router-dom';
import '../sass/Navbar.scss';
import { Clock } from 'grommet';

class Navbar extends React.Component{
    render(){
        
       
        return (
            <div className="nav-container">
                <NavLink exact to="/" className="inactive" activeClassName="active"> <i className="material-icons" style={{fontSize: '1.3rem'}}>home</i> </NavLink>
                <NavLink to="/settings" className="inactive" activeClassName="active"> Settings</NavLink>
                <Clock alignSelf="center" hourLimit={12} size="small" type="digital" style={{ marginLeft: 'auto', color: 'black', fontWeight:'600'}}/>
            </div>

        )
    }

}

export default Navbar;