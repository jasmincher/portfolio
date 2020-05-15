import React from "react";
import about from "../assets/images/About.jpeg";
import '../sass/About.scss'


class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <h6>Hi, I'm Jas!</h6>

        <img src={about}/>

        <p>
          I'm currently a senior studying computer science. My passions lie in
          frontend, web design, and security, however I'm open to learning and
          exploring other branches in technology. One of my career goals is to
          use my programming skills to one day help the life of at least one
          person.
        </p>

        <p>
          In my freetime, I like to do my nails, play with my lovely dogs, 5
          dogs to be exact (yes 5, I love animals), and I also like to watch
          true crime. Watching true crime is so fascinating, yet, also very sad,
          especially when it comes to cases on missing people. These cases on
          missing people is what drove me to explore ways to combine my
          interests of technology and trying to help people.
        </p>
      </div>
    );
  }
}
export default About;
