import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Giphy Search Engine Prework</h1>
      <Search/>
      </div>
    );
  }
}

export default App;
