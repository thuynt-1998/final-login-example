import { createReducer, resettableReducer } from "reduxsauce";
import { Types } from "../action";

const initialState = {
  token: "",
  errorMessage: "",
};

export const loginSuccess = (state = initialState, action) => {
  return { errorMessage: "", token: action.token };
};
export const loginFailed = (state = initialState, action) => {
  return { token: "", errorMessage: action.error };
};

const resettable = resettableReducer("RESET");

const HANDLERS = {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILED]: loginFailed,
};

export default resettable(createReducer(initialState, HANDLERS));
