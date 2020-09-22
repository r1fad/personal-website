import React, { Component } from "react";

export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }

  componentDidMount(){
    window.location = "https://drive.google.com/file/d/0Bz5yEC3MNuFRUmF1bkZydy1QT0E/view?usp=sharing";
  }

  render(){
    return (<section>Redirecting...</section>);
  }
}

export default Redirect;