import React, { Component } from 'react';
import './App.css';
import './assets/semantic/semantic.min.css';
import Users from './modules/users/containers/Users';
import Register from './modules/forms/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
        
          <Register />
        </div>
      </div>
    );
  }
}

export default App;
