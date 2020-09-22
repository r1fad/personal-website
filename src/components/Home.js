import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

      <div className="home">

        <div>
          <img className="roundimg" src={require("../assets/face.jpg")} alt="my face"/>
        </div>

        <div>
          <h1>
            <span className="highlight">Ri</span>
            fad
            <span className="highlight"> La</span>fir 
          </h1>
        </div>
         
        <div className="description">
          <Typist 
                  cursor = {{show:false}}
                  avgTypingSpeed={100}>
            <h3>
              Software Engineer at <a href="https://www.adyen.com">Adyen</a>.
              Previously at <a href="https://www.morganstanley.com">Morgan Stanley</a>.            
            </h3>
          </Typist>
        </div> 
          
        <div>
          <a href="https://github.com/r1fad"
              target="_blank"
              rel="noopener noreferrer">
            <FontAwesomeIcon size="2x" className="logo" icon={['fab', 'github']}/>
          </a>

          <a href="https://www.linkedin.com/in/rifadlafir/"
              target="_blank"
              rel="noopener noreferrer">
            <FontAwesomeIcon size="2x" className="logo" icon={['fab', 'linkedin']} />
          </a>

          <a href="https://twitter.com/r1fad"
              target="_blank"
              rel="noopener noreferrer">
            <FontAwesomeIcon size="2x" className="logo" icon={['fab', 'twitter']} />
          </a>

          <a href="mailto:rifadlafir@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
            <FontAwesomeIcon size="2x" className="logo" icon={['fas', 'envelope']} />
          </a>

          <a href="https://drive.google.com/open?id=0Bz5yEC3MNuFRUmF1bkZydy1QT0E"
              title="CV"
              target="_blank"
              rel="noopener noreferrer">
            <FontAwesomeIcon size="2x" className="logo" icon={['fas', 'file']} />
          </a>
        </div>

      </div>
    )
  }
}

export default Home;
