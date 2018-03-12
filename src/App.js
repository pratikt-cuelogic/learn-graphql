import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import Users from './modules/users/containers/Users';
import Timeline from './modules/timeline/containers/Timeline'
import About from './modules/about/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Dashboard</Link>
            <Link to="/timline">Timeline</Link>
            <Link to="/about">About</Link>
          </h1>
        </header>
        <Switch>
          <Route path="/about" component={Users} />
          <Route path="/timline" component={Timeline} />
          <Route path="/" exact component={Timeline} />
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default App;

// <Users />