import React from 'react';
import '../sass/Home.scss';
import Window from '../components/Window';
import Section from '../components/Section';
import { Icons } from '../assets/data/Data';
import Notes from '../components/Notes'
import Projects from '../components/Projects'
import Settings from '../components/Settings'




class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      info: null
    };
  }


  //shows window with corresponding component 
  showWindow = (data) => {
    this.setState({
      show: true,
      info: data.component
    });
  }



  //hides window 
  hideWindow = () => {
    this.setState({ show: false })
  }


  //conditionally renders component based on component name in data
  renderComponent = () => {
    switch (this.state.info) {
      case 'Notes':
        return <Notes />
      case 'Projects':
        return <Projects />
      case 'Settings':
        return <Settings />
      default:
        return <Notes />
    }

  }

  //renders the window component with the conditionally rendered component with a close button
  renderWindow = () => {

    if (this.state.show == true) {

      return (
        <Window>
          <div className="close-btn-container">
            <i className="material-icons close-btn" onClick={this.hideWindow}>close</i>
          </div>
          {this.renderComponent()}
        </Window>
      )

    }

  }

  render() {

    return (
      <div className="home-container">
        {this.renderWindow()}

        <Section icons={Icons} onItemClick={this.showWindow} />

      </div>
    )
  }
}


export default Home;
