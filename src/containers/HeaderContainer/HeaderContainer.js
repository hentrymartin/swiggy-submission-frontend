import React from 'react';
import { connect } from 'react-redux';
import Header from './../../components/Header/Header';

const mapStatesToProps = (state) => {
  return {
  	notifications: state.NotificationReducer.notifications,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const HeaderContainer = connect(mapStatesToProps, mapDispatchToProps)(Header);

export default HeaderContainer;