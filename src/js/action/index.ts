import { createActions } from "reduxsauce";

interface ActionsCreators {
  loginRequest: (username: string, password: string) => any;
  login: () => any;
  reset: () => any;
  loginSuccess: (token: any) => any;
  loginFailed: (error: any) => any;
  addToDo: (task: any) => any;
  editToDo: (index: number, task: any) => any;
  removeToDo: (task: any) => any;
  signupRequest: (data: any) => any;
  signup: () => any;
}

interface ActionsTypes {
  LOGIN_REQUEST: string;
  LOGIN: string;
  RESET: string;
  LOGIN_SUCCESS: string;
  LOGIN_FAILED: string;
  ADD_TO_DO: string;
  EDIT_TO_DO: string;
  REMOVE_TO_DO: string;
  SIGNUP_REQUEST: string;
  SIGNUP: string;
}
export const { Types, Creators } = createActions<ActionsTypes, ActionsCreators>(
  {
    loginRequest: ["username", "password"],
    login: null,
    reset: null,
    loginSuccess: ["token"],
    loginFailed: ["error"],
    addToDo: ["task"],
    editToDo: ["index", "task"],
    removeToDo: ["task"],
    signupRequest: ["data"],
    signup: null,
  }
);

export default Creators;
