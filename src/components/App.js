import React, { Component } from 'react';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Experience from './Experience';

class App extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <Home />
        <About />
        <Experience />
      </div>

    )
  }
}

export default App;
