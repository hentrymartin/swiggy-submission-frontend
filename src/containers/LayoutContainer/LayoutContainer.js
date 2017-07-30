import React from 'react';
import { connect } from 'react-redux';
import {
  subscribeNotification,
} from './../../actions/CommonActions';
import {getFriends} from './../../actions/FriendsActions';
import Layout from './../../components/Layout/Layout';

const mapStatesToProps = (state) => {
  return {
    friends: state.FriendsReducer.friends,
    friendsMap: state.FriendsReducer.friendsMap,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    subscribeNotification: () => {
      subscribeNotification(dispatch);
    },
  getFriends: () => {
      getFriends()(dispatch);
    },
  };
};

const LayoutContainer = connect(mapStatesToProps, mapDispatchToProps)(Layout);

export default LayoutContainer;