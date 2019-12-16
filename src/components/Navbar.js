import React from 'react';
import '../sass/Navbar.scss';
import { Clock } from 'grommet';

class Navbar extends React.Component {
  
  render() {
    return (
      <div className="nav-container">
          <i className="material-icons" style={{ fontSize: '1.3rem', alignSelf: 'center'}}>
            home
          </i>

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
