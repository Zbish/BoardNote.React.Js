import React, { Component } from 'react';
import logo from './logo.svg';
import Note from'./components/Note.js';
import Checkbox from './components/Checkbox.js';
import Board from './components/Board.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board count={10}></Board>
      </div>
    );
  }
}

export default App;
