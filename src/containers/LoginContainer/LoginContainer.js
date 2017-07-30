import React from 'react';
import { connect } from 'react-redux';
import {
  onChange,
  onLogin,
} from './../../actions/LoginActions';
import Login from './../../components/Login/Login';

const mapStatesToProps = (state) => {
  return {
    email: state.LoginReducer.email,
    password: state.LoginReducer.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event, field) => {
      dispatch(onChange(field, event.target.value));
    },
    onLogin: (params, context) => {
      onLogin(params)(dispatch, context);
    },
  };
};

const LoginContainer = connect(mapStatesToProps, mapDispatchToProps)(Login);

export default LoginContainer;