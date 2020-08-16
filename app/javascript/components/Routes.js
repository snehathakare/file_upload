import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Upload from './Upload'
import Download from './Download'
import Login from './Login'
import history from './history';
import { Redirect } from 'react-router';

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/upload" component={Upload} />
          <Redirect exact from='/upload' to='/'/>
          <Route path="/download" component={Download} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
