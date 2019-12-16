import React from 'react';
import '../sass/Navbar.scss';
import { Clock } from 'grommet';
import { withRouter } from 'react-router'


class Navbar extends React.Component {
  
  render() {
    const { location } = this.props;
    const navbarDisplay = location.pathname === '/' ? {display: 'flex' } : { display: 'none' }

    console.log(navbarDisplay)
    return (
      <div className="nav-container" style={navbarDisplay}>
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

export default withRouter(Navbar);
