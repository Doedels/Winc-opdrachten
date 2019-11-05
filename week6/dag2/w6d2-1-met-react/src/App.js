import React, { Component } from 'react';
import MonthView from './Containers/MonthView/MonthView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tandartspraktijk</h1>
        <MonthView />
      </div>
    )
  }
}

export default App; 