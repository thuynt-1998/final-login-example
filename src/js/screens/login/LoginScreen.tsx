import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, StatusBar } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';


import Creators from "../../action";
import LoginForm from "./components/LoginForm";
import { styles } from "./Login.style";
const LoginScreen = (props: { navigation: any }) => {
  const dispatch = useDispatch();

  const onLogin = useCallback(() => dispatch(Creators.login()), []);
  useEffect(() => {
    onLogin();
    // auth().onAuthStateChanged(user => {
    //   console.log(user);
    // })
  }, []);
  const user = auth().currentUser;
  // console.log("user" + user)
  return (
    // <View style={styles.flex1}>
    <LinearGradient
      colors={["rgb(29,97,140)", "rgb(42,20,73)"]}
      start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
      style={styles.flex1}
    >
      <StatusBar
        backgroundColor="rgba(255,255,255,0)"
        translucent
      ></StatusBar>
      <LoginForm navigation={props.navigation} ></LoginForm>
    </LinearGradient>
    // </View>
  );
}
export default LoginScreen;
