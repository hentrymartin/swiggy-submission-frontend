const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ON_CHANGE_LOGIN':
      return Object.assign({}, state, {
        [action.field]: action.data,
      });
    default:
      return state;
  }
};

export default LoginReducer;