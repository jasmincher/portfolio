import React from 'react';
import '../sass/Home.scss';
import Window from '../components/Window';
import Section from '../components/Section';
import { Icons } from '../assets/data/Data';
import Notes from '../components/Notes';
import Projects from '../components/Projects';
import Settings from '../components/Settings';
import Mail from '../components/Mail';
import Resume from '../components/Resume';
import About from '../components/About';
import { gradients } from "../assets/data/Colors"
import Navbar from '../components/Navbar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      info: null,
      color: ''
    };
  }


//sets background for home page
  componentDidMount(){
    const color = localStorage.getItem('color') || gradients[0].color;
    this.setState({color})
    document.body.style.background = color;
  }


  //shows window with corresponding component
  showWindow = data => {
    this.setState({
      show: true,
      info: data.component
    });
  };

  //hides window
  hideWindow = () => {
    this.setState({ show: false, info: null });
    
  };

  //conditionally renders component based on component name in data
  renderComponent = () => {
    switch (this.state.info) {
      case "Mail":
        return <Mail />;
      case "Projects":
        return <Projects />;
      case "Settings":
        return <Settings />;
      case "Resume":
        return <Resume />;
      case "About":
        return <About />;
      default:
        return <Notes />;
    }
  };

  //renders the window component with the conditionally rendered component with a close button
  renderWindow = () => {
    if (this.state.show === true) {
      return (
        <Window handle=".close-btn-container" ID={this.state.info}>
          <div className="close-btn-container">
            <i className="material-icons close-btn" onClick={this.hideWindow}>
              close
            </i>
          </div>
          {this.renderComponent()}
        </Window>
      );
    }
  };

  render() {
    return (
      <div className="home-container">
      <Navbar program={this.state.info}/>

        <div style={{height: "95vh", width: "100%", position: "relative"}}>
        {this.renderWindow()}
        </div>

        <Section icons={Icons} onItemClick={this.showWindow} />
      </div>
    );
  }
}

export default Home;
