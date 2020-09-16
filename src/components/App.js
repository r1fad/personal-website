import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Home from './Home';
import ReactGA from 'react-ga';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fab, fas);

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
        <Home />
      </Container>
    )
  }
}

export default App;
