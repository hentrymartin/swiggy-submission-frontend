import React, {Component} from 'react';
import Input from './../Input/Input';
import PropType from 'prop-types';
import {Images} from './../../Images/Images';
import './AutoComplete.scss';

class AutoComplete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.selectValue = this.selectValue.bind(this);
  }

  filterValue() {
    return this.props.data.filter((item) => {
      const value = this.props.keyValue ? item[this.props.keyValue] : item;
      return value.toLowerCase().includes(this.props.value.toLowerCase());
    });
  }

  onFocus() {
    this.setState({
      showDropDown: true,
    });
  }

  onBlur() {
    setTimeout(() => {
      this.setState({
        showDropDown: false,
      });
    }, 300);
  }

  selectValue(selectedValue) {
    const dummyEvent = {
      target: {
        value: this.props.keyValue ? selectedValue[this.props.keyValue] : selectedValue,
      },
    };
    this.props.onSelect(selectedValue);
    this.props.onChange(dummyEvent);
  }

  render () {
    const filteredValues = this.filterValue() || [];
    return (
      <div className="auto-complete">
        <label>{this.props.label}</label>
        <div className="auto-complete__wrapper">
          <Input
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            placeholder={this.props.placeholder}
          />
          <div className="auto-complete__arrow-holder">
            <img src={Images.ChevronDown}/>
          </div>
          {
            filteredValues.length > 0 && this.state.showDropDown &&
            <div className="auto-complete__dropdown">
              {
                filteredValues.map((item, index) => {
                  return (
                    <li key={index} onClick={this.selectValue.bind(this, item)}>{this.props.keyValue ? item[this.props.keyValue] : item}</li>
                  );
                })
              }
            </div>
          }
        </div>
      </div>
    );
  }
};

AutoComplete.defaultProps = {
  name: 'autocomplete',
  value: '',
  onChange: () => {},
  data: [],
  keyValue: '',
  placeholder: 'Please type here',
  onSelect: () => {},
  label: '',
};

AutoComplete.propTypes = {
  name: PropType.string,
  value: PropType.string,
  onChange: PropType.func,
  data: PropType.array,
  keyValue: PropType.string,
  placeholder: PropType.string,
  onSelect: PropType.func,
  label: PropType.string,
};

export default AutoComplete;
