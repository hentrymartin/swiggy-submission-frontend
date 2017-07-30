import React from 'react';
import PropTypes from 'prop-types';
import {Images} from './../../Images/Images';
import CommentInput from './../CommentInput/CommentInput';
import moment from 'moment';
import './Comment.scss';

const Comment = (props) => {

  const getIndendationStyle = (level) => {
    const style = {
      marginLeft: 10 * level + 'px',
    };
    console.log(style);
    return style;
  };

  return (
    <div className="comment" style={getIndendationStyle(props.level)}>
      <div className="comment__info">
        <img src={props.comment.author.imageUrl ? props.comment.author.imageUrl : Images.UserDefaultIcon}/>
        <div>
          <div className="comment__info__text">{props.comment.content}</div>
          <div className="comment__info__date">{moment(props.comment.timestamp).format('DD/MM/YYYY HH:mm')}</div>
        </div>
        <div className="comment__info__reply">
          <span onClick={() => {props.showCommentInputByComment(props.comment);}}>Reply</span>
        </div>
      </div>
      {
        props.comment.comments &&
        props.comment.comments.map((comment, index) => {
          return (
            <Comment key={index}
              comment={comment}
              level={props.level + 1}
              showCommentInputByComment={props.showCommentInputByComment}
              onCommentInputChange={props.onCommentInputChange}
              addComment={props.addComment}
            />
          );
        })
      }
      {
        props.comment.showCommentInput &&
        <CommentInput
          value={props.comment.commentInputValue}
          onChange={(e) => {props.onCommentInputChange(e.target.value, props.comment);}}
          addComment={(e) => {if (e.which === 13) props.addComment(props.comment);}}
        />
      }
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
  showCommentInputByComment: PropTypes.func,
  onCommentInputChange: PropTypes.func,
  addComment: PropTypes.func,
};

export default Comment;
