import io from 'socket.io-client';
import {receivedNotification} from './NotificationActions';
const socket = io('http://localhost:3001');

export const postNotificationToServer = (params) => {
  socket.emit('post', params);
};

export const subscribeNotification = (dispatch) => {
  socket.on('post_added', (data) => {
    dispatch(receivedNotification(data));
  });
};