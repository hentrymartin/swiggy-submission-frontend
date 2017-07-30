import moment from 'moment';

const defaultState = {
  posts: [],
};

function recursion(post, commentFromView) {
  for (let i = 0; i < post.comments.length; i++) {
    const comment = post.comments[i];

    if (comment._id === commentFromView._id) {
      comment.showCommentInput = !comment.showCommentInput;
      continue;
    }

    if (comment.comments && comment.comments.length > 0) {
      recursion(comment, commentFromView);
    }
  }

  return post;
}

function changeCommentInput(post, commentFromView, value) {
  for (let i = 0; i < post.comments.length; i++) {
    const comment = post.comments[i];

    if (comment._id === commentFromView._id) {
      comment.commentInputValue = value;
      continue;
    }

    if (comment.comments && comment.comments.length > 0) {
      changeCommentInput(comment, commentFromView, value);
    }
  }

  return post;
}

function pushCommentsIntoPost(post, commentAdded, parent) {
  for (let i = 0; i < post.comments.length; i++) {
    const comment = post.comments[i];

    if (comment._id === parent._id) {
      comment.commentInputValue = '';
      if (!comment.comments) comment.comments = [];
      comment.comments.push(commentAdded);
      continue;
    }

    if (comment.comments && comment.comments.length > 0) {
      pushCommentsIntoPost(comment, commentAdded, parent);
    }
  }

  return post;
}

const HomeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'POST_CONTENT_CHANGED':
      return Object.assign({}, state, {
        postContent: action.postContent,
      });
    case 'POSTS_RECEIVED':
      return Object.assign({}, state, {
        posts: action.posts.map((post) => {
          post.formattedTime = moment().to(moment(post.timestamp));
          return post;
        }),
      });
    case 'SHOW_COMMENT_INPUT_BY_COMMENT':
      const posts = state.posts.map((post) => {
        if (post._id === action.post._id) {
          return recursion(post, action.comment);
        }
        return post;
      });
      return Object.assign({}, state, {
        posts,
      });
    case 'ON_COMMENT_INPUT_CHANGE':
      const changedPosts = state.posts.map((post) => {
        if (post._id === action.post._id && action.comment._id === action.post._id) {
          post.commentInputValue = action.value;
        } else if (post._id === action.post._id) {
          return changeCommentInput(post, action.comment, action.value);
        }
        return post;
      });
      return Object.assign({}, state, {
        posts: changedPosts,
      });
    case 'COMMENT_ADDED':
      const addedPosts = state.posts.map((post) => {
        if (post._id === action.comment.postId  && post._id === action.parent._id) {
          post.commentInputValue = '';
          post.comments.push(action.comment);
        } else {
          pushCommentsIntoPost(post, action.comment, action.parent);
        }

        return post;
      });
    return Object.assign({}, state, {
      posts: addedPosts,
    });

    case 'POST_ADDED':
      const postsAfterAdding = state.posts.map((post) => {
        return post;
      });
      action.post.formattedTime = moment().to(moment(action.post.timestamp));
      postsAfterAdding.unshift(action.post);
      return Object.assign({}, state, {
        posts: postsAfterAdding,
        postContent: '',
      });
    case 'UPDATE_TIME':
      const updatedPost = state.posts.map((post) => {
        post.formattedTime = moment().to(moment(post.timestamp));
        return post;
      });

      return Object.assign({}, state, {
        posts: updatedPost,
      });
    default:
      return state;
  }
};

export default HomeReducer;