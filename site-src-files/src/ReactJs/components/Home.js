import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    console.log(localStorage.token);
  }

  render() {
    return <div>
      <h4>Home</h4>
      <p>This is Home page.</p>
    </div>
  }
}

export default App;