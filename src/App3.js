import React, { Component } from 'react';
import logo from './logo.svg';
import './App3.css';
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
          Item {this.props.match.params.id}
          <br/>
          <Link to="/">to Home</Link>
          <br/>
          <Link to="/items">to Items</Link>
        </p>
      </div>
    );
  }
}

export default App;
