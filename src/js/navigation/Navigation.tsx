import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import auth from '@react-native-firebase/auth';


import HomeScreen from "../screens/home/HomeScreen";
import LoginScreen from "../screens/login/LoginScreen";
import SignupScreen from "../screens/signup/SignupScreen";
import useNotification from "../notification/useNotification";
import Creators from "../action";
import ProfileScreen from "../screens/profile/ProfileScreen";
import DrawerNavigation from "./DrawerNavigation";

interface StateProps {
  auth: { token: any }
}
const Stack = createStackNavigator();

const Navigation = () => {
  const isLogin = useSelector((state: StateProps) => {
    console.log(state);

    return state.auth.token !== "" ? true : false;
  });
<<<<<<< HEAD
  const notification = useNotification();
  const dispatch = useDispatch();

  useEffect(() => {
    (() => { notification.init(); notification.sendMessage() })();
    dispatch(Creators.todoRequest())
    dispatch(Creators.userRequest())
  }, [])

=======
  console.log(isLogin);
>>>>>>> 677cc4f... fix(setup): services- fix service firebase

  return (
    <Stack.Navigator >
      {isLogin ? (
        <>
          <Stack.Screen
            name="home"
            component={DrawerNavigation}
            options={{
              title: "Trang chủ",
              headerShown: false,
              headerTransparent: true,
            }}
          ></Stack.Screen>

        </>

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
