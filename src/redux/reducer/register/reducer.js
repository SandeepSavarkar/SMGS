import * as types from '../../constants/actionTypes';

const initial = {
  user: [],
};

const registerReducer = (state = initial, action) => {
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default registerReducer;