import {createReducer, resettableReducer} from 'reduxsauce';
import {Types} from '../action';
const resettable = resettableReducer('RESET');

export const authState = {
  token: '',
  type: 0,
  errorMessage: '',
};

export const loginSuccess = (state = authState, action: any) => {
  console.log(action);
  return {errorMessage: '', token: action.token, type: action.number};
};
export const loginFailed = (state = authState, action: {error: any}) => {
  return {token: '', type: 0, errorMessage: action.error};
};

const HANDLERS = {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILED]: loginFailed,
};

export default resettable(createReducer(authState, HANDLERS));
