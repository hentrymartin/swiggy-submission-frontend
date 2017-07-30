import fetch from 'isomorphic-fetch';
import {getItem} from './../utils/storageUtils';
import moment from 'moment';
import {postNotificationToServer} from './CommonActions';
import {Constants} from './../constants/constants';

export const onPostContentChange = (postContent) => {
  return {
    type: 'POST_CONTENT_CHANGED',
    postContent,
  };
};

export const postsReceived = (posts) => {
  return {
    type: 'POSTS_RECEIVED',
    posts,
  };
};

export const showCommentInputByComment = (post, comment) => {
  return {
    type: 'SHOW_COMMENT_INPUT_BY_COMMENT',
    post,
    comment,
  };
};

export const onCommentInputChange = (value, comment, post) => {
  return {
    type: 'ON_COMMENT_INPUT_CHANGE',
    value,
    comment,
    post,
  };
};

export const commentAdded = (comment, parent) => {
  return {
    type: 'COMMENT_ADDED',
    comment,
    parent,
  };
};

export const postAdded = (post) => {
  return {
    type: 'POST_ADDED',
    post
  };
};

export const getPosts = () => {
  return (dispatch) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getItem('swiggySampleToken'),
      },
      mode: 'cors',
      cache: 'default',
    };
    return fetch(Constants.API_URL + 'post', options)
    .then(res => res.json())
    .then((data) => {
      dispatch(postsReceived(data));
    });
  };
};

export const addComment = (comment) => {
  return (dispatch) => {
    let params = {
      content: comment.commentInputValue,
    };
    if (!comment.postId) {
      params.postId = comment._id;
    } else {
      params.postId = comment.postId;
      params.parentId = comment._id;
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getItem('swiggySampleToken'),
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(params),
    };

    return fetch(Constants.API_URL + 'comment/create', options)
    .then(res => res.json())
    .then((data) => {
      dispatch(commentAdded(data, comment));
    });
  };
};

export const onAddPost = (params) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getItem('swiggySampleToken'),
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(params),
    };

    return fetch(Constants.API_URL + 'post/create', options)
    .then(res => res.json())
    .then((data) => {
      dispatch(postAdded(data));
      const user = getItem('swiggySampleUser');
      const params = {
        userId: user._id,
        name: user.name,
        imageUrl: user.imageUrl,
        postId: data._id,
        timestamp: moment(),
        content: data.content,
        email: user.email,
      };
      postNotificationToServer(params);
    });
  };
};

