import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginContainer from './../containers/LoginContainer/LoginContainer';
import LayoutContainer from './../containers/LayoutContainer/LayoutContainer';
import SignupContainer from './../containers/SignupContainer/SignupContainer';

class BaseRoutes extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // socket.io-client
  }

  render() {
    return (
      <Router basename="/">
        <Switch>
          <Route path="/login" component={LoginContainer}/>
          <Route path="/signup" component={SignupContainer}/>
          <Route path="/home" component={LayoutContainer}/>
        </Switch>
      </Router>
    );
  }
}

export default BaseRoutes;
