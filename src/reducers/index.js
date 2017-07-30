import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import LoginReducer from './LoginReducer';
import FriendsReducer from './FriendsReducer';
import NotificationReducer from './NotificationReducer';
import SignupReducer from './SignupReducer';

export default combineReducers({
  HomeReducer,
  LoginReducer,
  FriendsReducer,
  NotificationReducer,
  SignupReducer,
});
