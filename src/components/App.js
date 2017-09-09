import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Experience from './Experience';
import ReactGA from 'react-ga';



class App extends Component{
  constructor(){
    super();
    this.state={
      someData: null,
    };

    ReactGA.initialize('UA-93024360-2');
    ReactGA.pageview(window.location.pathname);
  }
  render(){
    return(
      <Container>
        <NavBar />
        <Home />
        <hr className="style14"/>
        <About />
        <hr className="style14"/>
        <Experience />
      </Container>

    )
  }
}

export default App;
