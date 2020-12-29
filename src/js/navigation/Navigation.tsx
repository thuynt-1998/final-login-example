import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import auth from '@react-native-firebase/auth';


import HomeScreen from "../screens/home/HomeScreen";
import LoginScreen from "../screens/login/LoginScreen";
import SignupScreen from "../screens/signup/SignupScreen";

interface StateProps {
  auth: { token: any }
}
const Stack = createStackNavigator();

const Navigation = () => {
  const isLogin = useSelector((state: StateProps) => {
    return state.auth.token !== "" ? true : false;
  });
  useEffect(() => {
    const token = auth().onAuthStateChanged(user => {
      // console.log(user);
    })
    // console.log(token);

  }, [])

  return (
    <Stack.Navigator >
      {isLogin ? (
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: "Trang chủ",
            headerShown: false,
            headerTransparent: true,
          }}
        ></Stack.Screen>
      ) : (
          <>
            <Stack.Screen
              name="login"
              component={LoginScreen}
              options={{
                title: "Login",
                headerTitleStyle: { textAlign: "center", color: "black" },
                headerShown: false,
                headerTransparent: true,
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="signup"
              component={SignupScreen}
              options={{
                title: "Sign Up",
                headerTitleStyle: { textAlign: "center", color: "white" },
                headerShown: false,
                headerTransparent: true,
              }}
            ></Stack.Screen>
          </>
        )}
    </Stack.Navigator>
  );
}

export default Navigation;
