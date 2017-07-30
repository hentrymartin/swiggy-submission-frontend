import React, {Component} from 'react';
import AddPost from './../AddPost/AddPost';
import PostItem from './../PostItem/PostItem';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onAddPost = this.onAddPost.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  onAddPost() {
    const params = {
      content: this.props.postContent,
    };

    this.props.onAddPost(params);
  }

  render() {
    return (
      <div className="home-container">
        <AddPost
          postContent={this.props.postContent}
          onPostContentChange={this.props.onPostContentChange}
          onAddPost={this.onAddPost}
        />
        <div className="home-container__posts">
          {
            this.props.posts.map((post, index) => {
              return (
                <PostItem
                  key={index}
                  post={post}
                  onCommentInputChange={(value, comment) => {this.props.onCommentInputChange(value, comment, post);}}
                  showCommentInputByComment={(comment) => {this.props.showCommentInputByComment(post, comment);}}
                  addComment={this.props.addComment}
                />
              );
            })
          }
          {
            this.props.posts.length === 0 &&
            <div className="home-container__posts__no-post">No post available</div>
          }
        </div>
      </div>
    );
  }
}

export default Home;
