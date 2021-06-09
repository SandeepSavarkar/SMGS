import {callService} from '../../../services';
// import apiUrl from "../../../services/serverEndpoints";

export const loginService = async action => {
  let jsonBody = {
    // email: action.payload.param.email,
    // password: action.payload.param.password

    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };
  let result = await callService(
    'https://reqres.in/api/login',
    'POST',
    jsonBody,
    action.payload.props,
    action.payload.cbError,
    action.payload.cbSuccess,
  );
  return result;
};
