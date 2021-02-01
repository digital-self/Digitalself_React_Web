import React, { Component } from 'react';
import Login from './components/Login';

class App extends Component {
  render() {
    return <div>
      <h4>Home</h4>
      <p>This is Home page.</p>
      <Login />
    </div>
  }
}

export default App;