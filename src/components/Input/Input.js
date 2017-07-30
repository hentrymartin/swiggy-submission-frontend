import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.reference = this.reference.bind(this);

    this.state = {
      isFocused: false,
    };
  }

  onFocus() {
    this.setState({
      isFocused: true,
    });
  }

  onBlur() {
    this.setState({
      isFocused: false,
    });
  }

  reference(input) {
    this.input = input;
    this.props.reference(input);
  }

  render() {

    let isFocused = false;
    if (this.props.value || this.props.value !== '') {
      isFocused = true;
    } else {
      isFocused = this.state.isFocused;
    }

    return (
      <div className={classnames(this.props.className, 'input-wrapper', {'focused': isFocused})}>
        <label>{this.props.label}</label>
        <input
          name={this.props.name}
          value={this.props.value}
          ref={this.reference}
          onKeyPress={this.props.onKeyPress}
          onChange={this.props.onChange}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        {
          this.props.showError &&
          <div className="input-wrapper__error-message">{this.props.errorMessage}</div>
        }
      </div>
    );
  }
}

Input.defaultProps = {
  name: '',
  label: '',
  value: '',
  type: 'text',
  className: '',
  placeholder: 'Please enter text',
  onKeyPress: () => {},
  reference: () => {},
  onChange: () => {},
  errorMessage: '',
  showError: false,
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onKeyPress: PropTypes.func,
  reference: PropTypes.func,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  showError: PropTypes.bool,
};

export default Input;
