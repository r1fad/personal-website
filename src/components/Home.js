import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
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
          <Typist
            className="text"
            avgTypingSpeed={30}
            cursor = {{show:false}}
            avgTypingDelay={100}>
            <h2>Hello, I am Rifad Lafir</h2>
          </Typist>
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

            <a href={require("../assets/mycv.pdf")}
               download="rifadlafirCV.pdf"
               title="Download My CV">
              <img className="fade logo"
                   src={require("../assets/logos/cv.png")}
                   alt="Download My CV" />
            </a>
           </div>
         </div>

      </ScrollableAnchor>

    )
  }
}

export default Home;
