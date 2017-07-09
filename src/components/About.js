import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/about.css';

class About extends Component{
  render(){
    return(
      <ScrollableAnchor id={"section-about"}>
        <section className="about">
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
              I consider myself a quick learner and love to experiment
              and break things (I am really good at breaking things!).
              I am able to come up with a reason to as to why I broke it
              in O(log n) time at best and O(n^2) at worst.

              I also like to think I have a good taste in music but I
              am gonna let you judge for yourself. Check out my
              <a href="https://open.spotify.com/user/r1fad"> public playlists</a>.

            </p>
          </center>
        </section>
      </ScrollableAnchor>
    )
  }
}

export default About;
