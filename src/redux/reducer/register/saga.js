import * as types from '../../constants/actionTypes';
import { put, call } from 'redux-saga/effects';

export function* registerUser(action) {
  try {
    
    // console.log(payload.user.email);
    // const apiConfig = {
    //   method: 'POST',
    //   url: "https://reqres.in/api/login",
    //   data: {
    //     "fname":payload.user.fname,
    //     "lname":payload.user.lname,
    //     "mobile":payload.user.mobile,
    //     "email": payload.user.email,
    //     "password": payload.user.password
    //   }
    // };
    // const response = yield call(axios, apiConfig);
    yield put({ type: types.REGISTER_USER_SUCCESS, payload: ["vimal patel"] });
  } catch (e) {
    
    console.log(e);
    yield put({ type: types.REGISTER_USER_FAILURE, payload: e.message });
  }
}