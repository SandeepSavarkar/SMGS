import * as types from '../../constants/actionTypes';

const initial = {
  user: [],
  token: ''
};

const loginReducer = (state = initial, action) => {
  console.log('=========Login Reducer===============');
  console.log(action.payload);
  console.log('====================================');
  switch (action.type) {

    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default loginReducer;