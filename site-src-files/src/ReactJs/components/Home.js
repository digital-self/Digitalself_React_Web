import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class App extends Component {

  render() {
    if (!localStorage.token) {
      return (<Redirect to='/login' />);
    }

    return <div>
      <h4>Home</h4>
      <p>This is Home page.</p>
    </div>
  }
}

export default App;