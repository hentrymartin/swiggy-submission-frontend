import io from 'socket.io-client';
import {receivedNotification} from './NotificationActions';
import {Constants} from './../constants/constants';
const socket = io(Constants.API_URL);

export const postNotificationToServer = (params) => {
  socket.emit('post', params);
};

export const subscribeNotification = (dispatch) => {
  socket.on('post_added', (data) => {
    dispatch(receivedNotification(data));
  });
};