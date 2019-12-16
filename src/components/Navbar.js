import React from 'react';
import '../sass/Navbar.scss';
import { Clock } from 'grommet';
import { withRouter } from 'react-router'


class Navbar extends React.Component {
  
  render() {
    // const { location } = this.props;
    // const navbarDisplay = location.pathname === '/portfolio' ? {display: 'flex' } : { display: 'none' }

    return (
      <div className="nav-container" style={{display: 'flex'}}>
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
// export default withRouter(Navbar);
