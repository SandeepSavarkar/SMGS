import * as types from '../../constants/actionTypes';

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    payload: user,
  }
}
