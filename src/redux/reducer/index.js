// import { combineReducers } from 'redux';
import { combineReducers } from 'redux';
import loginReducer from './login/reducer';
import registerReducer from './register/reducer'

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
});

export default rootReducer;