import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home'
import UsersList from './Components/UsersList';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <ul>
            <li>
              <Link to="/">
                <p className="container">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/user-list">
                <p className="container">User List</p>
              </Link>
            </li>
          </ul>


          <Route exact path="/">
            <Home img=""></Home>
          </Route>
          <Route exact path="/" component={UsersList}>
          </Route>

        </Router>
      </div>
    );
  }
}

export default App;
