import {createActions} from 'reduxsauce';

interface ActionsCreators {
  loginRequest: (username: string, password: string, number: number) => any;
  login: () => any;
  reset: () => any;
  loginSuccess: (token: any, number: number) => any;
  loginFailed: (error: any) => any;
  todoRequest: () => any;
  addToDo: (task: any) => any;
  userRequest: ()=> any;
  addUser: (user: any) => any;
  signupRequest: (data: any) => any;
  signup: () => any;
}

interface ActionsTypes {
  LOGIN_REQUEST: string;
  LOGIN: string;
  RESET: string;
  LOGIN_SUCCESS: string;
  LOGIN_FAILED: string;
  TODO_REQUEST: string;
  ADD_TO_DO: string;
  USER_REQUEST: string;
  ADD_USER: string;
  SIGNUP_REQUEST: string;
  SIGNUP: string;
}
export const {Types, Creators} = createActions<ActionsTypes, ActionsCreators>({
  loginRequest: ['username', 'password', 'number'],
  login: null,
  reset: null,
  loginSuccess: ['token', 'number'],
  loginFailed: ['error'],
  todoRequest: null,
  addToDo: ['task'],
  userRequest: null,
  addUser: ['user'],
  signupRequest: ['data'],
  signup: null,
});

export default Creators;
