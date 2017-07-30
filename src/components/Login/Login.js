import React from 'react';
import Input from './../Input/Input';
import Button from './../Button/Button';
import PropTypes from 'prop-types';
import './Login.scss';

const Login = (props, context) => {
  const onLogin = () => {
    const params = {
      email: props.email,
      password: props.password,
    };
    props.onLogin(params, context);
  };

  const goToSignup = () => {
    context.router.history.push('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-container__wrapper">
        <div className="login-container__wrapper__row">
          <Input
            name="email"
            type="text"
            className="material"
            placeholder=""
            label="Email"
            value={props.email}
            onChange={(e) => {props.onChange(e, 'email');}}
          />
        </div>
        <div className="login-container__wrapper__row">
          <Input
            name="name"
            type="password"
            className="material"
            placeholder=""
            label="Password"
            value={props.password}
            onChange={(e) => {props.onChange(e, 'password');}}
          />
        </div>
        <div className="login-container__wrapper__row">
          <Button
            name="login-btn"
            value="Login"
            onClick={onLogin}
          />
        </div>
        <div>
          <span className="login-container__have-account" onClick={goToSignup}>Don't have an account? Sign up</span>
        </div>
      </div>
    </div>
  );
};

Login.contextTypes = {
  router: PropTypes.object,
};

export default Login;
