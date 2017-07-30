import React from 'react';
import { connect } from 'react-redux';
import {
  onChange,
  onSignUp,
} from './../../actions/SignupActions';
import SignUp from './../../components/SignUp/SignUp';

const mapStatesToProps = (state) => {
  return {
    email: state.SignupReducer.email,
    name: state.SignupReducer.name,
    password: state.SignupReducer.password,
    isUserCreated: state.SignupReducer.isUserCreated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event, field) => {
      dispatch(onChange(field, event.target.value));
    },
    onSignUp: (params, context) => {
      onSignUp(params)(dispatch, context);
    },
  };
};

const SignupContainer = connect(mapStatesToProps, mapDispatchToProps)(SignUp);

export default SignupContainer;