import React, { Component } from 'react';
import logo from './logo.svg';
import './App2.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Items
          <br/>
          <Link to="/items/1">to Item 1</Link>
          <br/>
          <Link to="/items/2">to Item 2</Link>
          <br/>
          <Link to="/items/3">to Item 3</Link>
        </p>
      </div>
    );
  }
}

export default App;
