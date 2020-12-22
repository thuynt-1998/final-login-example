import { testSaga } from "redux-saga-test-plan";
import { createMockTask } from "@redux-saga/testing-utils";

import AsyncStorage from "@react-native-community/async-storage";

jest.mock("@react-native-community/async-storage");
import Creators, { Types } from "../../action";
import LoginServices from "../../sevices/api/LoginServices";

import { authorize, loginFlow } from "../api-sagas";

describe("test api saga", () => {
  const data = {
    authenticated: true,
    user: "thuy@gmail.com",
  };

  it("test authorize() sucess", () => {
    testSaga(authorize, "thuy@gmail.com", "123456789")
      .next()
      .call(LoginServices.author, "thuy@gmail.com", "123456789")
      .next({ originalError: null, data, status: 200 })
      .put(Creators.loginSuccess(data))
      .next()
      .call(LoginServices.setItem, data.authenticated)
      .next()
      .isDone();
  });
  it("test authorize() failed", () => {
    testSaga(authorize, "thuy@gmail.com3", "123456789")
      .next()
      .call(LoginServices.author, "thuy@gmail.com3", "123456789")
      .next({
        originalError: { message: "Request failed with status code 401" },
        data: null,
        status: 401,
      })
      .put(
        Creators.loginFailed({
          error: "Request failed with status code 401",
          status: 401,
        })
      )
      .next();
  });
  it("test loginFlow() , reset", () => {
    const task = {
      "@@redux-saga/IO": true,
      combinator: false,
      type: "FORK",
      payload: {
        username: "thuy@gmail.com",
        password: "123456789",
      },
    };
    const mockTask = createMockTask();
    testSaga(loginFlow)
      .next()
      .take("LOGIN_REQUEST")
      .next({ username: "thuy@gmail.com", password: "123456789" })
      .fork(authorize, "thuy@gmail.com", "123456789")
      .next(mockTask)
      .take([Types.RESET, Types.LOGIN_FAILED])
      .next({ type: "RESET" })
      .cancel(mockTask)
      .next()
      .call(LoginServices.removeItem)
      .next();
  });
  it("test", () => {});
});
