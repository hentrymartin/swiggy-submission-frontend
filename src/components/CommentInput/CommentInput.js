import React from 'react';
import {Images} from './../../Images/Images';
import Input from './../Input/Input';
import PropTypes from 'prop-types';
import './CommentInput.scss';

const CommentInput = (props) => {
  return (
    <div className="comment-input">
      <img src={Images.UserDefaultIcon}/>
      <Input
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.addComment}
      />
    </div>
  );
};

CommentInput.propTypes = {
  onChange: PropTypes.func,
  addComment: PropTypes.func,
  value: PropTypes.string,
};

export default CommentInput;
