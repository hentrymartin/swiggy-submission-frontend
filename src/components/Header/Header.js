import React from 'react';
import {Images} from './../../Images/Images';
import {getItem, removeItem} from './../../utils/storageUtils';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = (props, context) => {
  const user = getItem('swiggySampleUser');
  console.log(user);

  const logoutUser = () => {
    removeItem('swiggySampleToken');
    removeItem('swiggySampleUser');
    context.router.history.push('/login');
  };

  const goTo = (url) => {
    context.router.history.push(url);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__wrapper__user-info">
          <img src={Images.UserDefaultIcon}/>
          <div className="header__wrapper__user-info__info">
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        </div>
        <div className="header__wrapper__menu" onClick={() => {goTo('/home/feeds');}}>Feeds</div>
        <div className="header__wrapper__menu" onClick={() => {goTo('/home/friends');}}>Friends</div>
        <div className="header__wrapper__menu" onClick={() => {goTo('/home/notifications');}}>
          Notifications
          {
            props.notifications.length > 0 &&
            <span className="header__wrapper__menu__notification-count">{props.notifications.length}</span>
          }
        </div>
        <div className="header__wrapper__menu logout" onClick={logoutUser}>Logout</div>
      </div>
    </header>
  );
};

Header.contextTypes = {
  router: PropTypes.object,
};


export default Header;
