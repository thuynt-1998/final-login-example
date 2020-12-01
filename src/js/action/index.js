import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions(
  {
    loginRequest: ["username", "password"],
    login: null,
    reset: null,
    loginSuccess: ["token"],
    loginFailed: ["error"],
    addToDo: ["task"],
    editToDo: ["index", "task"],
    removeToDo: ["task"],
  },
  {}
);

export default Creators;
