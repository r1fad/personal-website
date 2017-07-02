import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Typist from 'react-typist';
import '../styles/home.css';

class Home extends Component{

  render(){
    return(
      <ScrollableAnchor id={"section-home"}>
        <section>
          <div className="home">
            <Typist
              className="text"
              avgTypingSpeed={30}
              cursor = {{show:false}}>
              <h2>Hello, I am Rifad Lafir</h2>
            </Typist>
            <div className="logos">

              <a href="https://github.com/r1fad"
                 target="_blank"
                 rel="noopener noreferrer">
                <img className="fade logo"
                     src={require("../assets/github.png")}
                     alt="Github"/>
              </a>

              <a href="https://www.linkedin.com/in/rifadlafir/"
                 target="_blank"
                 rel="noopener noreferrer">
                <img className="fade logo"
                     src={require("../assets/linkedin.png")}
                     alt="LinkedIn"/>
              </a>

              <a href="https://twitter.com/r1fad"
                 target="_blank"
                 rel="noopener noreferrer">
                <img className="fade logo"
                     src={require("../assets/twitter.png")}
                     alt="Twitter"/>
              </a>

              <a href="mailtp:rifad.lafir@outlook.com"
                 target="_blank"
                 rel="noopener noreferrer">
                <img className="fade logo"
                     src={require("../assets/mail.png")}
                     alt="E-Mail"/>
              </a>

             </div>
           </div>
        </section>
      </ScrollableAnchor>

    )
  }
}

export default Home
