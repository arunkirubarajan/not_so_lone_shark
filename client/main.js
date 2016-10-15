import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/Layout';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Request from './components/Request';

Meteor.startup(() => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='home' component={Home}></Route>
        <Route path='login' component={Login}></Route>
        <Route path='register' component={Register}></Route>
        <Route path='request' component={Request}></Route>
      </Route>
    </Router>,
    document.querySelector('.app'));
})
