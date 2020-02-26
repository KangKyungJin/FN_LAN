import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null
    }
  }

  render() {
    return (
      <div>
        <Navigation 
          user={ this.state.user } 
          logOutUser={ this.logOutUser }
        />

        <Router>
          <Home path="/" />
          <Register path="/register" />
          <Login path="/login" />
        </Router>
      </div>
    )
  }
}

export default App;
