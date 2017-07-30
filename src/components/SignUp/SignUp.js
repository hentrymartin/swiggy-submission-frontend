import React from 'react';
import Input from './../Input/Input';
import Button from './../Button/Button';
import PropTypes from 'prop-types';
import './SignUp.scss';

const SignUp = (props, context) => {
  const onSignUp = () => {
    const params = {
      name: props.name,
      email: props.email,
      password: props.password,
    };
    props.onSignUp(params, context);
  };

  if (props.isUserCreated) {
    alert('User Signed up');
  }

  const goToLogin = () => {
    context.router.history.push('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-container__wrapper">
        <div className="signup-container__wrapper__row">
          <Input
            name="name"
            type="text"
            className="material"
            placeholder=""
            label="Name"
            value={props.name}
            onChange={(e) => {props.onChange(e, 'name');}}
          />
        </div>
        <div className="signup-container__wrapper__row">
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
        <div className="signup-container__wrapper__row">
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
        <div className="signup-container__wrapper__row">
          <Button
            name="login-btn"
            value="Sign Up"
            onClick={onSignUp}
          />
        </div>
        <div>
          <span className="signup-container__have-account" onClick={goToLogin}>Already have an account? Log In</span>
        </div>
      </div>
    </div>
  );
};

SignUp.contextTypes = {
  router: PropTypes.object,
};

export default SignUp;
