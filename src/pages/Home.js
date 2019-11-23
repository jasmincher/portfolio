import React, { useState } from 'react';
import '../sass/Home.scss';
import Window from '../components/Window';
import Notes from '../components/Notes';
import Section from '../components/Section';
import { Icons } from '../assets/data/Data'


function Home() {

  const [showWindow, setShowWindow] = useState(0);
  const [currentWindow, setCurrentWindow] = useState(null);


  const shouldShowWindow = (window) => {
    setShowWindow(!showWindow);
    if (window != null) {
      setCurrentWindow(!null)
    }

    console.log("did should show window")
  }


  const hideWindow = () => {
    setShowWindow(false);
    setCurrentWindow(null);
    console.log("did hide window")

  }


  const renderWindow = () => {
    if (showWindow == true && currentWindow != null) {
      return (
        <Window>
          <i className="material-icons close-btn" onClick={hideWindow}>close</i>
          <Notes />
        </Window>



      )

    }
    console.log("did render window")
  }




  return (
    <div className="home-container">


      {renderWindow()}


      <div onClick={() => { (showWindow == true) ? shouldShowWindow() : shouldShowWindow() }}> 


        <Section icons={Icons} onItemClick={shouldShowWindow} />

      </div>




    </div>

  );
}

export default Home;