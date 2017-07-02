import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/about.css';

class About extends Component{
  render(){
    return(
      <ScrollableAnchor id={"section-about"}>
        <div className="about">
          <h2 className="heading">About Me</h2>
          <center>
            <p className="sub-text">
              I am a second year student studying for a <a href="http://www.cs.manchester.ac.uk/study/undergraduate/courses/computer-science/?code=09616&pg=home">
              MEng in Computer Science</a> at <a href="http://www.manchester.ac.uk/">The University of Manchester</a>.
            </p>
            <p className="sub-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec lectus felis. Duis in interdum lectus, vel vehicula ante. Sed a volutpat mauris, id tincidunt nisi. Ut iaculis dolor non ligula consequat porttitor. Vivamus lobortis pellentesque bibendum. Pellentesque rhoncus mauris vel velit aliquam tempor sit amet eu magna. Curabitur dictum viverra massa, eu lacinia odio consequat et. Morbi nec aliquam odio. Duis at elit iaculis, vulputate metus quis, blandit sapien. Phasellus sit amet ex eget ipsum vulputate tincidunt. Ut mollis metus lacus. Aenean magna erat, imperdiet eu fermentum sit amet, malesuada nec ligula. Proin imperdiet leo gravida massa efficitur posuere. Nam ultricies diam et felis finibus viverra. Aenean elementum libero vel vestibulum hendrerit.
            </p>
          </center>
        </div>
      </ScrollableAnchor>
    )
  }
}

export default About;
