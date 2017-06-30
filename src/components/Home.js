import React, {Component} from 'react';
import Typist from 'react-typist';
import '../styles/home.css';

class Home extends Component{

  render(){
    return(
      <div className="home">
        <div className="home-text">
          <Typist
            avgTypingSpeed={30}
            cursor = {{show:false}}
          >
            <h2>Hello, I am Rifad Lafir</h2>
            <center><h7>Second Year Computer Science Student</h7></center>
          </Typist>
        </div>
        <img className="fade github logo"
             src={require("../assets/github.png")}
             alt="Github"
             href="https://github.com/r1fad"/>
        <img className="fade linkedin logo"
             src={require("../assets/linkedin.png")}
             alt="LinkedIn"
             href="https://www.linkedin.com/in/rifadlafir/"/>
        <img className="fade twitter logo"
             src={require("../assets/twitter.png")}
             alt="Twitter"
             href="https://twitter.com/r1fad"/>
      </div>

    )
  }
}

export default Home
