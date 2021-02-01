import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import App from './ReactJs/App';
import About from './ReactJs/About';
import Contact from './ReactJs/Contact';
import Login from './ReactJs/components/Login.js';

const routing = (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </Switch>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));
