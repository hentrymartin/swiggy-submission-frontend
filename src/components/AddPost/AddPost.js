import React from 'react';
import PropTypes from 'prop-types';
import Button from './../Button/Button';
import './AddPost.scss';

const AddPost = (props) => {
  return (
    <div className="add-post">
      <textarea
        value={props.postContent}
        onChange={props.onPostContentChange}
        placeholder="Post What's in your mind!!"
      />
      <div className="add-post__btn-wrapper">
        <Button
          value="Add Post"
          className="add-post-btn"
          onClick={props.onAddPost}
        />
      </div>
    </div>
  );
};

AddPost.defaultProps = {
  postContent: '',
  onPostContentChange: () => {},
  onAddPost: () => {},
};

AddPost.propTypes = {
  postContent: PropTypes.string,
  onPostContentChange: PropTypes.func,
  onAddPost: PropTypes.func,
};

export default AddPost;