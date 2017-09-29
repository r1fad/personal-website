import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {Row, Col} from 'reactstrap';
import Typist from 'react-typist';
import '../styles/home.css';

class Home extends Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state={
      tooltipOpen: false
    };
  }

  toggle(){
    this.setState({
      tooltipOpen: !this.this.state.tooltipOpen
    });
  }

  render(){


    return(

      <ScrollableAnchor id={"section-home"}>

        <div className="home">

          <Row>
            <Col>
              <Typist
                className="text"
                avgTypingSpeed={30}
                cursor = {{show:false}}
                avgTypingDelay={100}>
                <h2>Hello, I am Rifad Lafir</h2>
              </Typist>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="logos">
                <a href="https://github.com/r1fad"
                   target="_blank"
                   rel="noopener noreferrer">
                  <img className="fade logo"
                       src={require("../assets/logos/github.png")}
                       alt="Github"/>
                </a>
                <a href="https://www.linkedin.com/in/rifadlafir/"
                   target="_blank"
                   rel="noopener noreferrer">

                    <img className="fade logo"
                         src={require("../assets/logos/linkedin.png")}
                         alt="LinkedIn"/>
                </a>
                <a href="https://twitter.com/r1fad"
                   target="_blank"
                   rel="noopener noreferrer">
                  <img className="fade logo"
                       src={require("../assets/logos/twitter.png")}
                       alt="Twitter"/>
                </a>
                <a href="mailto:rifad.lafir@outlook.com"
                   target="_blank"
                   rel="noopener noreferrer">
                  <img className="fade logo"
                       src={require("../assets/logos/mail.png")}
                       alt="E-Mail"/>
                </a>
                <a href="https://drive.google.com/open?id=0Bz5yEC3MNuFRUmF1bkZydy1QT0E"
                   title="Download My CV"
                   target="_blank"
                   rel="noopener noreferrer">
                  <img className="fade logo"
                       src={require("../assets/logos/cv.png")}
                       alt="Download My CV" />
                </a>
              </div>
            </Col>
          </Row>
         </div>
      </ScrollableAnchor>
    )
  }
}

export default Home;
