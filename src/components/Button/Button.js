import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => (
  <button
    className={classnames('button custom', props.className, props.theme, props.size)}
    name={props.name}
    type={props.type}
    onClick={props.onClick}>
    {props.value}
  </button>
);

Button.defaultProps = {
  name: '',
  value: 'Submit',
  size: 'medium',
  type: 'button',
  onClick: () => {},
};

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
