const defaultState = {
  notifications: [],
  recentNotification: {},
};

const NotificationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'RECEIVED_NOTIFICATION':
      const notifications = state.notifications.map((notification) => {
        return notification;
      });
      if (state.friendsMap[action.notification['email']]) notifications.push(action.notification);
      return Object.assign({}, state, {
        notifications,
        recentNotification: action.notification,
      });
    case 'FRIENDS_FETCHED':
      const friendsMap = {};
      for (let i = 0; i < action.friends.length; i++) {
        friendsMap[action.friends[i]['email']] = action.friends[i];
      }
      return Object.assign({}, state, {
        friends: action.friends,
        friendsMap,
      });
    default:
      return state;
  }
};

export default NotificationReducer;