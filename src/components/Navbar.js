import React from 'react';
import '../sass/Navbar.scss';
import { Clock } from 'grommet';
import { NavLink } from 'reactstrap'
import Notes from './Notes'
import Window from './Window'

class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
           clicked: null,
           active: false
        };
    }


    isClicked = (id) => {
        if (this.state.clicked === id) {
            this.setState({ clicked: null });
            
        } else {
            this.setState({ clicked: id, active: true })

        }

    }



    renderW = () => {
        if (this.state.active == true) {
            return <Notes/>
        }
    }


    changeFont = (id) => {
        if (this.state.clicked === id) {
            return "500"
        } return " ";
    }





    render() {


        return (
            <div className="nav-container">

                {/* {this.renderW()} */}
                <NavLink exact to="/" style={{fontWeight: this.changeFont(0)}} onClick={() => {this.isClicked(0)}}> <i className="material-icons" style={{ fontSize: '1.3rem' }}>home</i> </NavLink>
                <NavLink style={{fontWeight: this.changeFont(1)}} onClick={() => {this.isClicked(1)}}>About</NavLink>





                <Clock alignSelf="center" hourLimit={12} size="small" type="digital" style={{ marginLeft: 'auto', color: 'black', fontWeight: '600' }} />
            </div>

        )
    }

}

export default Navbar;