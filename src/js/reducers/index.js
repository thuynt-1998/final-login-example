import { createReducer } from "reduxsauce";
import { Types } from "../action";

const initialState = {
  token: "",
  errorMessage: "",
};

export const loginSuccess = (state = initialState, action) => {
  return { ...state, errorMessage: "", token: action.token };
};
export const loginFailed = (state = initialState, action) => {
  return { ...state, token: "", errorMessage: action.error };
};
export const logout = (state = initialState) => {
  return { ...state, errorMessage: "", token: {} };
};
const HANDLERS = {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILED]: loginFailed,
  [Types.LOGOUT]: logout,
};

export default createReducer(initialState, HANDLERS);
