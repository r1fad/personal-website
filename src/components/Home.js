import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Typist from 'react-typist';
import '../styles/home.css';

class Home extends Component{

  render(){
    return(
      <ScrollableAnchor id={"section-home"}>
        <div>
          <div className="home">
            <Typist
              className="text"
              avgTypingSpeed={30}
              cursor = {{show:false}}>
              <h2>Hello, I am Rifad Lafir</h2>
            </Typist>
            <div className="logos">

              <a href="https://github.com/r1fad">
                <img className="fade logo"
                     src={require("../assets/github.png")}
                     alt="Github"/>
              </a>

              <a href="https://www.linkedin.com/in/rifadlafir/">
                <img className="fade logo"
                     src={require("../assets/linkedin.png")}
                     alt="LinkedIn"/>
              </a>

              <a href="https://twitter.com/r1fad">
                <img className="fade logo"
                     src={require("../assets/twitter.png")}
                     alt="Twitter"/>
              </a>

             </div>
           </div>
        </div>
      </ScrollableAnchor>

    )
  }
}

export default Home
