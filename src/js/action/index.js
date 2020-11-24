import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions(
  {
    loginRequest: ["username", "password"],
    login: null,
    reset: null,
    loginSuccess: ["token"],
    loginFailed: ["error"],
  },
  {}
);

export default Creators;
