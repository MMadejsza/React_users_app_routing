import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home'
import UsersList from './Components/UsersList';
import PostsList from './Components/Posts/PostsList'
// import Logo from './Logo.jpg'
import axios from 'axios'

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
            <li>
              <Link to="/posts">
                <p className="container">Posts</p>
              </Link>
            </li>
          </ul>


          <Route exact path="/">
            <Home path="https://cdn2.techmaniak.pl/wp-content/uploads/fotomaniak/2021/01/DSC00512.jpg"></Home>
          </Route>
          <Route exact path="/user-list" component={UsersList}>
          </Route>
          <Route exact path="/posts">
            <PostsList></PostsList>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
