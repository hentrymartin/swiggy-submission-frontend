import React, {Component} from 'react';
import {Images} from './../../Images/Images';
import Button from './../Button/Button';
import './Friends.scss';

class Friends extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="friends-container">
        <div className="friends-container__wrapper">
          <div className="friends-container__wrapper__friends-section">
            <div className="friends-container__wrapper__friends-section__title">Your Friends:</div>
            {
              this.props.friends.map((friend, index) => {
                return (
                  <div key={index} className="friends-container__wrapper__friends-section__friend">
                    <div className="friends-container__wrapper__friends-section__friend__photo">
                      <img src={friend.imageUrl ? friend.imageUrl : Images.UserDefaultIcon}/>
                    </div>
                    <div className="friends-container__wrapper__friends-section__friend__information">
                      <div className="friends-container__wrapper__friends-section__friend__elements">{friend.name}</div>
                      <div className="friends-container__wrapper__friends-section__friend__elements">{friend.email}</div>
                    </div>
                  </div>
                );
              })
            }
            {
              this.props.friends.length === 0 &&
              <div className="friends-container__wrapper__friends-section__error">No Friends Available. You can make friends from below</div>
            }
          </div>
          <div className="friends-container__wrapper__users-section">
            <div className="friends-container__wrapper__users-section__title">Make Friends Here:</div>
            {
              this.props.users.map((user, index) => {
                return (
                  <div key={index} className="friends-container__wrapper__users-section__user">
                    <div className="friends-container__wrapper__users-section__user__photo">
                      <img src={user.imageUrl ? user.imageUrl : Images.UserDefaultIcon}/>
                    </div>
                    <div className="friends-container__wrapper__users-section__user__information">
                      <div className="friends-container__wrapper__users-section__user__elements">{user.name}</div>
                      <div className="friends-container__wrapper__users-section__user__elements">{user.email}</div>
                    </div>
                    <div className="friends-container__wrapper__users-section__user__cta">
                      <div>
                        <Button
                          type="submit"
                          name="make friends"
                          value="Make Friends"
                          onClick={() => {this.props.makeFriends(user);}}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;