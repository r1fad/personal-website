import React, {Component} from 'react';
import '../styles/about.css';

class About extends Component{
  render(){
    return(
      <div className="about">
        <h2 className="heading">About Me</h2>
        <center>
          <p className="sub-text">
            I am a second year student studying for a <a href="http://www.cs.manchester.ac.uk/study/undergraduate/courses/computer-science/?code=09616&pg=home">
            MEng in Computer Science</a> at <a href="http://www.manchester.ac.uk/">The University of Manchester</a>
          </p>
        </center>

      </div>
    )
  }
}

export default About;
