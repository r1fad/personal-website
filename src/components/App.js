import React, { Component } from 'react';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';

class App extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <Home />
        <About />
      </div>

    )
  }
}

export default App;
