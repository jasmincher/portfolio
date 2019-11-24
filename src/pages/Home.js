import React from 'react';
import '../sass/Home.scss';
import Window from '../components/Window';
import Section from '../components/Section';
import { Icons } from '../assets/data/Data';


class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showWindow: 0,
      currentWindow: null,
    };
  }


  shouldShowWindow = (window) => {
    this.setState({
      showWindow: !this.state.showWindow
    })

    if (window != null) {
      this.setState({
        currentWindow: !null

      })
    }
  }

  hideWindow = () => {
    this.setState({
      showWindow: false,
      currentWindow: null
    })
    console.log("did hide window")

  }



  renderWindow = () => {

    if (this.state.showWindow == true && this.state.currentWindow != null) { //&& Icons[0].window == 'Projects'
      return (
        <Window>
          <i className="material-icons close-btn" onClick={this.hideWindow}>close</i>
        </Window>

      )

    }
    console.log("did render window")
  }



  render() {

    return (
      <div className="home-container">


        {this.renderWindow()}


        <div onClick={() => { (this.state.showWindow == true) ? this.hideWindow() : this.shouldShowWindow() }}>


          <Section icons={Icons} onItemClick={this.shouldShowWindow} />

        </div>

      </div>

    );
  }
}

export default Home;