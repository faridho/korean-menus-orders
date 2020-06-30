import React from 'react';
import './App.css';
import { Layout } from 'antd';

import Login from "./Views/Login";
import Root from "./Views/Root";

import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCGDDOc2SGmiORikIAkPQfR_CyC72fXJh8",
  authDomain: "faridho-s-project.firebaseapp.com",
  databaseURL: "https://faridho-s-project.firebaseio.com",
  projectId: "faridho-s-project",
  storageBucket: "faridho-s-project.appspot.com",
  messagingSenderId: "938482721225",
  appId: "1:938482721225:web:c211d5b1ec1d7567c04818",
  measurementId: "G-PQEPFQ70WN"
};
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
    const isLoggedIn = this.state.isLoggedIn
    const display = isLoggedIn ? <Root /> : <Login />

    return (
      <Layout>
        {display}
      </Layout>
    );
  }

}

export default App;
