import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Redirect from './Redirect';
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
      <div>
        <Router>
          <Switch>
            <Route
              path="/cv"
              component={ Redirect }/>
            <Route path="/">
                <Home />
              </Route>
          </Switch>
          
        </Router>
        
      </div>
    )
  }
}

export default App;
