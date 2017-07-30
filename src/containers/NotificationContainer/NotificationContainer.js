import React from 'react';
import { connect } from 'react-redux';
import Notifications from './../../components/Notifications/Notifications';

const mapStatesToProps = (state) => {
  return {
    friends: state.NotificationReducer.friends,
    notifications: state.NotificationReducer.notifications,
    friendsMap: state.NotificationReducer.friendsMap,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const NotificationContainer = connect(mapStatesToProps, mapDispatchToProps)(Notifications);

export default NotificationContainer;