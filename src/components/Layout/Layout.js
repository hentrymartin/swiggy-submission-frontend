import React, {Component} from 'react';
import HomeContainer from './../../containers/HomeContainer/HomeContainer';
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer';
import FriendsContainer from './../../containers/FriendsContainer/FriendsContainer';
import NotificationContainer from './../../containers/NotificationContainer/NotificationContainer';
import {getItem} from './../../utils/storageUtils';
import { Route, Switch } from 'react-router-dom';
import './Layout.scss';

class Layout extends Component {
  componentDidMount() {
    this.props.subscribeNotification();
    this.props.getFriends();
  }

  render() {
    return (
      <div className="layout">
        <HeaderContainer/>
        <Switch>
          <Route exact path="/home/feeds" component={HomeContainer} />
          <Route exact path="/home/friends" component={FriendsContainer} />
          <Route exact path="/home/notifications" component={NotificationContainer} />
        </Switch>
      </div>
    );
  }
}

export default Layout;
