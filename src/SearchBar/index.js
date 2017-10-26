import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-container">
          <Link to="/">
            <div className="SearchBar-container-logo"></div>
          </Link>
          <form className="SearchBar-container-form">
            <input className="SearchBar-container-form-input" type="text" placeholder="Nunca dejes de buscar" />
            <button className="SearchBar-container-form-button" type="submit">
              <div className="SearchBar-container-form-button-logo"></div>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
