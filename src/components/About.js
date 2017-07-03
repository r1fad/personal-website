import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/about.css';

class About extends Component{
  render(){
    return(
      <ScrollableAnchor id={"section-about"}>
        <section className="col-lg-12 about">
          <h2 className="heading">About Me</h2>
          <center>
            <p className="sub-text">
              I am a second year student studying for a <a
              href="http://www.cs.manchester.ac.uk/study/undergraduate/courses/computer-science/?code=09616&pg=home">
              MEng in Computer Science (with Industrial Experience) </a>
              at <a href="http://www.manchester.ac.uk/">
              The University of Manchester</a>.
              I have a firm grounding in Python and Java
              and am quite knowledgeable in JavaScript
              (Node.js and React). I built this website using React.
              My interests in the CS field include Data Science, Cybersecurity,
              Artificial Intelligence and Web Development.</p>
            <p className="sub-text">
              Sed a volutpat mauris, id tincidunt nisi.
              Ut iaculis dolor non ligula consequat porttitor.
              Vivamus lobortis pellentesque bibendum.
              Pellentesque rhoncus mauris vel velit aliquam tempor
              sit amet eu magna.
              Curabitur dictum viverra massa, eu lacinia odio consequat et.
              Morbi nec aliquam odio.
            </p>
          </center>
        </section>
      </ScrollableAnchor>
    )
  }
}

export default About;
