import React, { Component } from 'react';
import './App.css';
import NavigationBar from '../NavigationBar/NavigationBar'
import SearchField from '../SearchField/SearchField'

class App extends Component {
  render() {
    return (
      <div style={{height: 13000}}>
        <NavigationBar/>
        <SearchField/>
      </div>
    );
  }
}

export default App;
