import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Images} from './../../Images/Images';
import moment from 'moment';
import Input from './../Input/Input';
import Comment from './../Comment/Comment';
import CommentInput from './../CommentInput/CommentInput';
import './PostItem.scss';

class PostItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCommentSection: false,
    };

    this.onShowCommentSection = this.onShowCommentSection.bind(this);
  }

  onShowCommentSection() {
    this.setState({
      showCommentSection: !this.state.showCommentSection,
    });
  }

  render() {
    return (
      <div className="post-item">
        <div className="post-item__author">
          <img className="post-item__user-img" src={this.props.post.author.imageUrl ? this.props.post.author.imageUrl : Images.UserDefaultIcon}/>
          <div className="post-item__author__info">
            <div className="post-item__author__info__name">{this.props.post.author.name}</div>
            <div className="post-item__author__info__posted-time">{moment(this.props.post.timestamp).format('DD/MM/YYYY hh:mm')}</div>
          </div>
        </div>
        <div className="post-item__content">
          {this.props.post.content}
        </div>
        <div className="post-item__link-tray">
          <span onClick={this.onShowCommentSection}>Comment</span>
        </div>
        {
          this.state.showCommentSection &&
          <div className="comments-section">
            {
              this.props.post.comments &&
              this.props.post.comments.map((comment, index) => {
                return (
                  <Comment
                    key={index}
                    comment={comment}
                    level={1}
                    showCommentInputByComment={this.props.showCommentInputByComment}
                    onCommentInputChange={this.props.onCommentInputChange}
                    addComment={this.props.addComment}
                  />
                );
              })
            }
            <CommentInput
              value={this.props.post.commentInputValue}
              onChange={(e) => {this.props.onCommentInputChange(e.target.value, this.props.post);}}
              addComment={(e) => {if (e.which === 13) this.props.addComment(this.props.post);}}
            />
          </div>
        }
      </div>
    );
  }
}

PostItem.defaultProps = {
  post: {},
  showCommentInputByComment: () => {},
  addComment: () => {},
};

PostItem.propTypes = {
  post: PropTypes.object,
  showCommentInputByComment: PropTypes.func,
  addComment: PropTypes.func,
};

export default PostItem;
