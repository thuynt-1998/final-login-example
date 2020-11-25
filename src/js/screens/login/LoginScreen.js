import React, { useCallback, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import Creators from "../../action";
import LoginForm from "./components/LoginForm";
import { styles } from "./Login.style";

function LoginScreen(props) {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const onLoginRequest = (username, password) =>
    dispatch(Creators.loginRequest(username, password));
  const onLogin = useCallback(() => dispatch(Creators.login()), []);
  useEffect(() => {
    onLogin();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LoginForm
        onLoginRequest={onLoginRequest}
        setIsLogin={setIsLogin}
      ></LoginForm>
      {isLogin && (
        <View style={styles.loading}>
          <ActivityIndicator color="primary" size="small" />
        </View>
      )}
    </SafeAreaView>
  );
}
export default LoginScreen;
