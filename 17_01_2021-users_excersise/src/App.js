import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home'
import UsersList from './Components/UsersList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/">
            <p className="container">Home</p>
          </Link>
          <Link to="/user-list">
            <p className="container">User List</p>
          </Link>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/" component={UsersList}>
          </Route>

        </Router>
      </div>
    );
  }
}

export default App;
