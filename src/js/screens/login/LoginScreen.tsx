import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Creators from "../../action";
import LoginForm from "./components/LoginForm";
import { styles } from "./Login.style";
import { View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const onLogin = useCallback(() => dispatch(Creators.login()), []);
  useEffect(() => {
    onLogin();
  }, []);

  return (
    <View style={styles.flex1}>
      <LinearGradient
        colors={["rgb(29,97,140)", "rgb(42,20,73)"]}
        style={styles.flex1}
      >
        <StatusBar
          backgroundColor="rgba(255,255,255,0)"
          translucent
        ></StatusBar>
        <LoginForm></LoginForm>
      </LinearGradient>
    </View>
  );
}
export default LoginScreen;
