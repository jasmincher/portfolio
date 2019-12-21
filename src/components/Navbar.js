import React from 'react';
import '../sass/Navbar.scss';
import { Clock } from 'grommet';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      <div className="nav-container" style={{display: 'flex'}}>
          <i className="material-icons" style={{ fontSize: '1.3rem', alignSelf: 'center'}}>
            home
          </i>

        <p style={{marginTop: '4px', marginLeft: '10px', fontWeight: '450'}}>{this.props.program}</p>
      
        <Clock
          alignSelf="center"
          hourLimit={12}
          size="small"
          type="digital"
          style={{ marginLeft: 'auto', color: 'black', fontWeight: '400' }}
        />
      </div>
    );
  }
}

export default Navbar;
