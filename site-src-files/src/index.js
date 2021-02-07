import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './ReactJs/components/Home';
import Login from './ReactJs/components/authentication/Login.js';
import Register from './ReactJs/components/authentication/Register';
import Profile from './ReactJs/components/Profile';
import AddPost from './ReactJs/components/admin/posts/AddPost';
import EditPost from './ReactJs/components/admin/posts/EditPost';
import UsersHome from './ReactJs/components/admin/users/UsersHome';
import AddUser from './ReactJs/components/admin/users/AddUser';
import EditUser from './ReactJs/components/admin/users/EditUser';
import ListUsers from './ReactJs/components/admin/users/ListUsers'

const routing = (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/addPost" component={AddPost} />
        <Route path="/editpost" component={EditPost} />
        <Route path="/usershome" component={UsersHome} />
        <Route path="/adduser" component={AddUser} />
        <Route path="/edituser" component={EditUser} />
        <Route path="/listusers" component={ListUsers} />
      </Switch>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));
