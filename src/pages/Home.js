import React from 'react';
import '../sass/Home.scss';
import Window from '../components/Window';
import Section from '../components/Section';
import { Icons } from '../assets/data/Data';
import Notes from '../components/Notes'
import Projects from '../components/Projects'


class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showWindow: 0,
      currentWindow: null,
    };
  }


  shouldShowWindow = (data) => {
    this.setState({
      showWindow: !this.state.showWindow
    })

    if (data != null) {
      this.setState({
        currentWindow: data.window

      })
    }
  }


  hideWindow = () => {
    this.setState({
      showWindow: false,
      currentWindow: null
    })

  }


  renderComponent = () => {
    switch (this.state.currentWindow) {
      case 'Notes':
        return <Notes />
      case 'Projects':
        return <Projects />
      default:
        return <Notes />
    }

  }



  renderWindow = () => {

    if (this.state.showWindow == true && this.state.currentWindow != null) {

      return (
        <Window>
          <i className="material-icons close-btn" onClick={this.hideWindow}>close</i>
          {this.renderComponent()}
        </Window>
      )

    }

  }

  
  render() {

    return (
      <div className="home-container">
        {this.renderWindow()}

        <div onClick={() => { (this.state.showWindow == true) ? this.hideWindow() : this.shouldShowWindow() }}>
          <Section icons={Icons} idk={Icons} onItemClick={this.shouldShowWindow} />
        </div>

      </div>

    );
  }
}

export default Home;