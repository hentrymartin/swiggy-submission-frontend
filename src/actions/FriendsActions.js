import fetch from 'isomorphic-fetch';
import {getItem} from './../utils/storageUtils';

export const friendsFetched = (friends) => {
  return {
    type: 'FRIENDS_FETCHED',
    friends,
  };
};

export const usersFetched = (users) => {
  return {
    type: 'USERS_FETCHED',
    users,
  };
};

export const getAllUsers = () => {
  return (dispatch) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getItem('swiggySampleToken'),
      },
      mode: 'cors',
      cache: 'default',
    };
    return fetch('http://localhost:3001/api/users', options)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      dispatch(usersFetched(data));
    });
  };
};

export const getFriends = () => {
  return (dispatch) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getItem('swiggySampleToken'),
      },
      mode: 'cors',
      cache: 'default',
    };

    return fetch('http://localhost:3001/api/friends', options)
    .then(res => res.json())
    .then((data) => {
      dispatch(friendsFetched(data));
      getAllUsers()(dispatch);
    });
  };
};

export const makeFriends = (user) => {
  return (dispatch) => {
    const params = {
      id: user._id,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getItem('swiggySampleToken'),
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(params),
    };

    return fetch('http://localhost:3001/api/friends/make', options)
    .then(res => res.json())
    .then((data) => {
      getFriends()(dispatch);
    });
  };
};

