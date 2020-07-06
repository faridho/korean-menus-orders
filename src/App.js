import React from 'react';
import './App.css';

import Views from "./Views/index"
import UserProvider from "./UserProvider"

import { firebaseConfig } from "./firebase"
import * as firebase from "firebase/app";
import "firebase/auth";

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error raised", err.stack);
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    return (
      <UserProvider>
          <Views />
      </UserProvider>
    );
  }

}


export default App
