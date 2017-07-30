import React from 'react';
import { connect } from 'react-redux';
import Home from './../../components/HomePage/Home';
import {
  onPostContentChange,
  getPosts,
  showCommentInputByComment,
  onCommentInputChange,
  addComment,
  onAddPost,
  updateTime,
} from './../../actions/HomeActions';

const mapStatesToProps = (state) => {
  return {
    postContent: state.HomeReducer.postContent,
    posts: state.HomeReducer.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostContentChange: (event) => {
      dispatch(onPostContentChange(event.target.value));
    },
    getPosts: () => {
      getPosts()(dispatch);
    },
    showCommentInputByComment: (post, comment) => {
      dispatch(showCommentInputByComment(post, comment));
    },
    onCommentInputChange: (value, comment, post) => {
      dispatch(onCommentInputChange(value, comment, post));
    },
    addComment: (comment) => {
      addComment(comment)(dispatch);
    },
    onAddPost: (params) => {
      onAddPost(params)(dispatch);
    },
    updateTime: () => {
      dispatch(updateTime());
    },
  };
};

const HomeContainer = connect(mapStatesToProps, mapDispatchToProps)(Home);

export default HomeContainer;