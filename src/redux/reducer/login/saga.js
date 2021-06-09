import * as types from '../../constants/actionTypes';
import { put, call } from 'redux-saga/effects';
import { loginService } from './services';

export function* loginUser(action) {
  try {
    const result = yield call(loginService, action);
    
    console.log('=========SAGA=============');
    console.log(result.Result.data);
    console.log('====================================');

    if (result?.isSucess)
      yield put({ type: types.LOGIN_USER_SUCCESS, payload: result.Result.data });
  } catch (e) {
    yield put({ type: types.LOGIN_USER_FAILURE, payload: e.message });
  }
}