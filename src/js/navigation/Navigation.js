import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import HomeScreen from "../screens/home/HomeScreen";
import LoginScreen from "../screens/login/LoginScreen";

const Stack = createStackNavigator();

function Navigation(props) {
  const isLogin = useSelector((state) => {
    return state.auth.token !== "" ? true : false;
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
            headerTransparent: true,
          }}
        ></Stack.Screen>
      ) : (
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            title: "Đăng nhập",
            headerTitleStyle: { textAlign: "center", color: "black" },
            headerShown: false,
            headerTransparent: true,
          }}
        ></Stack.Screen>
      )}
    </Stack.Navigator>
  );
}

export default Navigation;
