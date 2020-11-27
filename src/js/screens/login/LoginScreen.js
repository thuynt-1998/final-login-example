import React, { useCallback, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import Creators from "../../action";
import LoginForm from "./components/LoginForm";
import { styles } from "./Login.style";

function LoginScreen(props) {
  const dispatch = useDispatch();
  const onLoginRequest = useCallback((username, password) =>
    dispatch(Creators.loginRequest(username, password))
  );
  const onLogin = useCallback(() => dispatch(Creators.login()), []);
  useEffect(() => {
    onLogin();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LoginForm onLoginRequest={onLoginRequest}></LoginForm>
    </SafeAreaView>
  );
}
export default LoginScreen;
