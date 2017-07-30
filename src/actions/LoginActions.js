import fetch from 'isomorphic-fetch';
import {setItem, getItem} from './../utils/storageUtils';
import {Constants} from './../constants/constants';

export const onChange = (field, data) => {
  return {
    type: 'ON_CHANGE_LOGIN',
    field,
    data,
  };
};

export const getUser = () => {
  return (dispatch, context) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getItem('swiggySampleToken'),
      },
      mode: 'cors',
      cache: 'default',
    };

    return fetch(Constants.API_URL + 'user', options)
    .then(res => res.json())
    .then((data) => {
      setItem('swiggySampleUser', data);
      context.router.history.push('/home/feeds');
    });
  };
};

export const onLogin = (params) => {
  return (dispatch, context) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(params),
    };

    return fetch(Constants.API_URL + 'user/authenticate', options)
    .then(res => res.json())
    .then((data) => {
      setItem('swiggySampleToken', data.token);
      getUser()(dispatch, context);
    });
  };
};