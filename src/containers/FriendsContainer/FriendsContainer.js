import React from 'react';
import { connect } from 'react-redux';
import Friends from './../../components/Friends/Friends';
import {
  getFriends,
  makeFriends,
} from './../../actions/FriendsActions';

const mapStatesToProps = (state) => {
  return {
    friends: state.FriendsReducer.friends,
    users: state.FriendsReducer.users,
    friendsMap: state.FriendsReducer.friendsMap,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFriends: () => {
      getFriends()(dispatch);
    },
    makeFriends: (user) => {
      makeFriends(user)(dispatch);
    },
  };
};

const FriendsContainer = connect(mapStatesToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;