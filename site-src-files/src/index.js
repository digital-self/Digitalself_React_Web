import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './ReactJs/components/Home';
import Login from './ReactJs/components/Login.js';
import Register from './ReactJs/components/Register';

const routing = (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));
