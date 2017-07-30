const defaultState = {
  isUserCreated: false,
};

const SignupReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ON_CHANGE_SIGNUP':
      return Object.assign({}, state, {
        [action.field]: action.data,
        isUserCreated: false,
      });
    case 'USER_CREATED':
      return Object.assign({}, state, {
        isUserCreated: true,
      });
    default:
      return state;
  }
};

export default SignupReducer;