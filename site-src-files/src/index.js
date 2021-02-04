import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './ReactJs/components/Home';
import Login from './ReactJs/components/authentication/Login.js';
import Register from './ReactJs/components/authentication/Register';
import Profile from './ReactJs/components/Profile';
import AddPost from './ReactJs/components/admin/posts/AddPost';

const routing = (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/addPost" component={AddPost} />
      </Switch>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));
