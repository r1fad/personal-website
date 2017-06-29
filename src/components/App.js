import React, { Component } from 'react';
import About from './About';
import NavBar from './NavBar';

class App extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <About />
      </div>

    )
  }
}

export default App;
