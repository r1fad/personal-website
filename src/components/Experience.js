import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/experience.css';

class Experience extends Component{
  render(){
    return(
      <ScrollableAnchor id={"section-experience"}>
        <div className="experience">
          <h2 className="headingE">Experience</h2>
        </div>
      </ScrollableAnchor>
    )
  }
}

export default Experience;
