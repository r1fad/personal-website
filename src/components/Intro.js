import React, {Component} from 'react';
import Typist from 'react-typist';
import '../styles/index.css';

class Intro extends Component{
  
  render(){
    return(
      <div className="intro">
        <div className="intro-text">
          <Typist
            avgTypingSpeed={20}
            cursor = {{show:false}}
          >
            <h1>Hello, I am Rifad Lafir</h1>
          </Typist>
        </div>
      </div>
    )
  }
}

export default Intro
