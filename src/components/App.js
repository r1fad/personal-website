import React, { Component } from 'react';
import Intro from './Intro';
import NavBar from './NavBar';

class App extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <Intro />
      </div>

    )
  }
}

export default App;
