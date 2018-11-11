import React, { Component } from 'react';
import './App.css';
import NavigationBar from '../NavigationBar/NavigationBar'
import SearchField from '../SearchField/SearchField'
import FooterPage from '../Footer/FooterPage'
import Content from '../Content/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <SearchField/>
        <Content/>
        <FooterPage/>
      </div>
    );
  }
}

export default App;
