import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import firebase from './Components/Firebase'

import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Register from './Components/Register';
import Login from './Components/Login';
import MakeTournament from './Components/MakeTournament';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      if(FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });

      } else {
        this.setState({ user: null })
      }
    });
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      })
      .then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate('/meetings');
      });
    });
  }

  logOutUser = e => {
    e.preventDefault();
    this.setState({
      user: null,
      displayName: null,
      userID: null
    });

    firebase
      .auth()
      .signOut()
      .then(() => {
      navigate('/login');
    })
  }
  

  render() {
    return (
      <div>
        <Navigation 
          user={ this.state.user } 
          logOutUser={ this.logOutUser }
        />

        <Router>
          <Home path="/" user={ this.state.user }/>
          <Register path="/register" />
          <Login path="/login" />
          <MakeTournament
            path="/createtourney"
            tournaments={this.state.tournaments}
            userID={this.state.userID}
          />
          {/* <TournamentLists path="/tournaments" /> */}
        </Router>
      </div>
    )
  }
}

export default App;
