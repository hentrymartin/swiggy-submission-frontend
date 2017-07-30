export const receivedNotification = (notification) => {
  return {
    type: 'RECEIVED_NOTIFICATION',
    notification,
  };
};
