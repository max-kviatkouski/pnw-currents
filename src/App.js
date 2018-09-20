import React, { Component } from 'react';
import './App.css';
import TopNav from './TopNav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" id="nav-header">
            <TopNav/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
