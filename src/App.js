import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import firebase from './Components/Firebase'

import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Register from './Components/Register';
import Login from './Components/Login';

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
