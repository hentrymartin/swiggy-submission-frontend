const defaultFriendsState = {
  friends: [],
  users: [],
};

const FriendsReducer = (state = defaultFriendsState, action) => {
  switch (action.type) {
    case 'FRIENDS_FETCHED':
      const friendsMap = {};
      for (let i = 0; i < action.friends.length; i++) {
        friendsMap[action.friends[i]['email']] = action.friends[i];
      }
      return Object.assign({}, state, {
        friends: action.friends,
        friendsMap,
      });
    case 'USERS_FETCHED':

      const users = action.users.filter((user) => {
        console.log(user['email'], state.friendsMap[user['email']]);
        return !state.friendsMap[user['email']];
      });

      return Object.assign({}, state, {
        users,
      });
    default:
      return state;
  }
};

export default FriendsReducer;