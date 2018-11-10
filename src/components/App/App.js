import React, { Component } from 'react';
import './App.css';
import NavigationBar from '../NavigationBar/NavigationBar'
import SearchField from '../SearchField/SearchField'
import FooterPage from '../Footer/FooterPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <SearchField/>
        <FooterPage/>
      </div>
    );
  }
}

export default App;
