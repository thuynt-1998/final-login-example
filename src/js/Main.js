import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { useSelector } from "react-redux";
import LoginServices from "./sevices/api/LoginServices";

const Stack = createStackNavigator();

function Main(props) {
  const isLogin = useSelector((state) => {
    return state.token.authenticated ? true : false;
  });

 
  return (
    <Stack.Navigator initialRouteName="login">
      {isLogin ? (
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: "Trang chủ",
            headerShown: false,
          }}
        ></Stack.Screen>
      ) : (
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            title: "Đăng nhập",
            headerTitleStyle: { textAlign: "center", color: "black" },
          }}
        ></Stack.Screen>
      )}
    </Stack.Navigator>
  );
}

export default Main;
