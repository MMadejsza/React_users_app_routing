import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Components/Home'
import './Components/UsersList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/user-list">
            <p>User List</p>
          </Link>

        </Router>
      </div>
    );
  }
}

export default App;
