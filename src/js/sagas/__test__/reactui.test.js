import React from "react";
import { fireEvent, render, act } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { Fontisto } from "@expo/vector-icons";
import store from "../../store";
import LoginForm from "../../screens/login/components/LoginForm";
import InputLogin from "../../screens/login/components/InputLogin";

describe("test ui react native", () => {
  test("test InputLogin", () => {
    const onValue = jest.fn();
    const {
      getByLabelText,
      queryByTestId,
      getByTestId,
      getByPlaceholderText,
    } = render(
      <Provider store={store}>
        <InputLogin onValue={onValue} title="Email" />
      </Provider>
    );
    const { getByText } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    const button = getByText("Secure Login");
    act(() => {
      fireEvent.press(button);
    });

    expect(queryByTestId("nameError")).toBeTruthy();
  });

  test("test InputLogin", () => {
    const onValue = jest.fn();
    const {
      getByLabelText,
      queryByTestId,
      getByTestId,
      getByPlaceholderText,
    } = render(
      <Provider store={store}>
        <InputLogin onValue={onValue} title="Email" />
      </Provider>
    );
    const input = getByPlaceholderText("Email");
    fireEvent.changeText(input, "thuy@gmail.com");
    const { getByText } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    const button = getByText("Secure Login");
    act(() => {
      fireEvent.press(button);
    });

    expect(queryByTestId("nameError")).toBeTruthy();
  });
});
