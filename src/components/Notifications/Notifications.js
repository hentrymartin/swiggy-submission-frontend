import React from 'react';
import {Images} from './../../Images/Images';
import moment from 'moment';
import './Notifications.scss';

const Notifications = (props) => {
  return (
    <div className="notifications">
      <div className="notifications__wrapper">
        {
          props.notifications.map((notification, index) => {
            return (
              <div key={index} className="notifications__wrapper__notification">
                <div className="notifications__wrapper__notification__photo">
                  <img src={notification.imageUrl ? notification.imageUrl : Images.UserDefaultIcon}/>
                </div>
                <div className="notifications__wrapper__notification__information">
                  <div>Post Added by your friend {notification.name}</div>
                  <div>{notification.content}</div>
                </div>
                <div className="notifications__wrapper__notification__timing">
                  <div>{moment(notification.timestamp).format('DD/MM/YYYY HH:ss')}</div>
                </div>
              </div>
            );
          })
        }
        {
          props.notifications.length === 0 &&
          <div className="notifications__wrapper__no-notification">No notifications available</div>
        }
      </div>
    </div>
  );
};

export default Notifications;
