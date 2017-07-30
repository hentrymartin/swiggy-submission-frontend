import fetch from 'isomorphic-fetch';
import {setItem, getItem} from './../utils/storageUtils';
import {Constants} from './../constants/constants';

export const onChange = (field, data) => {
  return {
    type: 'ON_CHANGE_SIGNUP',
    field,
    data,
  };
};

export const userCreated = () => {
  return {
    type: 'USER_CREATED',
  };
};

export const onSignUp = (params) => {
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

    return fetch(Constants.API_URL + 'user/create', options)
    .then(res => res.json())
    .then((data) => {
      if (data.error_code) {
        return;
      }
      dispatch(userCreated());
    });
  };
};
