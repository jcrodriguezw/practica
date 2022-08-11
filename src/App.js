import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoApp from './components2/TodoApp'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React hook</h2>
    </div>

      < TodoApp />
    </div>
)

export default App;
