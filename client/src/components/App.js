import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import Navbar from './Navbar';
import MainPage from './MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <MainPage/>
      </div>
    );
  }
}

export default App;
