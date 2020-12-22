import {
  authState,
  loginSuccess,
  loginFailed,
} from "../../reducers/AuthReducer";
import { addToDo, editToDo, removeToDo } from "../../reducers/ToDoReducer";

describe("test redux reducer", () => {
  it("returns the auth reducer loginsuccess", () => {
    expect(
      loginSuccess(authState, {
        type: "LOGIN_SUCCESS",
        token: {
          authenticated: true,
          user: "thuy",
        },
      })
    ).toEqual({
      ...authState,
      token: {
        authenticated: true,
        user: "thuy",
      },
    });
  });
  it("returns the auth reducer loginFailed", () => {
    expect(
      loginFailed(authState, {
        type: "LOGIN_FAILED",
        error: {
          message: "Request failed with status code 401",
          status: 401,
        },
      })
    ).toEqual({
      ...authState,
      errorMessage: {
        message: "Request failed with status code 401",
        status: 401,
      },
    });
  });
  const toDoState = {
    toDo: [
      { id: 0, title: "do homework" },
      { id: 1, title: "go to school" },
      { id: 2, title: "pinic" },
      { id: 3, title: "go to bed" },
    ],
  };

  it("returns the to do reducers addToDo ", () => {
    expect(
      addToDo(toDoState, {
        type: "ADD_TO_DO",
        task: { id: 4, title: "take cake" },
      })
    ).toEqual({
      toDo: [
        { id: 0, title: "do homework" },
        { id: 1, title: "go to school" },
        { id: 2, title: "pinic" },
        { id: 3, title: "go to bed" },
        { id: 4, title: "take cake" },
      ],
    });
  });

  it("returns the to do reducers editToDo ", () => {
    expect(
      editToDo(toDoState, {
        type: "EDIT_TO_DO",
        index: 0,
        task: { id: 0, title: "driving" },
      })
    ).toEqual({
      toDo: [
        { id: 0, title: "driving" },
        { id: 1, title: "go to school" },
        { id: 2, title: "pinic" },
        { id: 3, title: "go to bed" },
      ],
    });
  });
  it("returns the to do reducers removeToDo ", () => {
    expect(
      removeToDo(toDoState, {
        type: "REMOVE_TO_DO",
        task: { id: 2, title: "pinic" },
      })
    ).toEqual({
      toDo: [
        { id: 0, title: "do homework" },
        { id: 1, title: "go to school" },
        { id: 3, title: "go to bed" },
      ],
    });
  });
});
