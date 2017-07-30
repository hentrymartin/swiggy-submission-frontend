import React from 'react';
import PropType from 'prop-types';
import classnames from 'classnames';
import './Checkbox.scss';

const Checkbox = (props) => {
  console.log(props);
  return (
    <div className="checkbox-wrapper">
      <label className={classnames('label', {'checkbox-checked': props.checked})}>
        <span>{props.label}</span>
        <input
          className="styled-checkbox"
          id="lendingKart-checkbox"
          type="checkbox"
          checked={props.checked}
          onChange={props.onChange.bind(this, props.checked)}
          value="value1"/>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: true,
  onChange: false,
  label: '',
};

Checkbox.propTypes = {
  checked: PropType.bool,
  onChange: PropType.func,
  label: PropType.string,
};

export default Checkbox;
