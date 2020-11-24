import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions(
  {
    loginRequest: ["username", "password"],
    login: null,
    logout: null,
    loginSuccess: ["token"],
    loginFailed: ["error"],
  },
  {}
);

export default Creators;
