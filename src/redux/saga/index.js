import * as types from '../constants/actionTypes';
import { takeEvery } from 'redux-saga/effects';
import { loginUser } from "../reducer/login/saga";
import { registerUser } from '../reducer/register/saga'

function* rootSaga() {
    yield takeEvery(types.LOGIN_USER, loginUser);
    yield takeEvery(types.REGISTER_USER, registerUser);
}

export default rootSaga;