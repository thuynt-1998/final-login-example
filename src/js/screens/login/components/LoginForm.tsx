import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "react-native-paper";
import {
  Ionicons,
  MaterialCommunityIcons,
  EvilIcons,
  Zocial,
  Fontisto,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { styles } from "../Login.style";
import { valid } from "../LoginForm.valid";
import InputLogin from "./InputLogin";
import { themeLogin, themeFaceBook, themeGoogle } from "../theme";
import Creators from "../../../action";

const LoginForm = () => {
  const { register, handleSubmit, setValue, errors } = useForm({
    resolver: yupResolver(valid),
  });
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const onLoginRequest = useCallback((username: string, password: string) =>
    dispatch(Creators.loginRequest(username, password)), []
  );
  useEffect(() => {
    register("username");
    register("password");
  }, [register]);
  const onClickLogin = useCallback((data: { username: string; password: string }) => {
    onLoginRequest(data.username, data.password);
    Keyboard.dismiss();
    setIsLogin(true);
  }, []);
  const onValue = useCallback((name: string, value: string) => setValue(name, value), []);
  return (
    <View style={[styles.marginContainer, styles.flex1]}>
      <View style={[styles.flex1, styles.flexRow]}>
        <Text style={[styles.logo]}>digitm</Text>
      </View>
      <View style={{ flex: 2 }}>
        <InputLogin
          label="username"
          onValue={onValue}
          errors={errors.username}
          title="Email"
          left={() => (
            <Fontisto name="email" size={20} color="rgb(179,189,197)" />
          )}
          secureTextEntry={false}
        />
        <InputLogin
          label="password"
          onValue={onValue}
          errors={errors.password}
          title="Password"
          left={() => {
            return (
              <MaterialCommunityIcons
                name="shield-lock-outline"
                size={20}
                color="rgb(179,189,197)"
              />
            );
          }}
          secureTextEntry={true}
        />

        <Button
          mode="contained"
          style={[styles.button, styles.buttonRadius]}
          disabled={isLogin}
          onPress={handleSubmit(onClickLogin)}
          uppercase={false}
          labelStyle={[styles.fontSize16, styles.letterSpacing]}
          icon={() => {
            return (
              <Ionicons
                name="ios-lock"
                size={20}
                color={isLogin ? "rgba(0,0,0,0.3)" : "white"}
              />
            );
          }}
        >
          Secure Login
        </Button>

        <View style={[styles.flexRow, styles.marginVertical]}>
          <Text style={styles.text}>Don't have an account ? </Text>
          <Button
            theme={themeLogin}
            uppercase={false}
            labelStyle={[styles.labelLink, styles.letterSpacing, styles.fontWeightOne]}
          >
            Sign up Now!
          </Button>
        </View>

        <View style={styles.underline}>
          <View style={styles.underlineThought}></View>
          <Text style={[styles.underlineText, styles.text]}>OR</Text>
          <View style={styles.underlineThought}></View>
        </View>
        <Text style={[styles.text, styles.marginVertical]}>
          Sign in with Social Networks
        </Text>
        <View style={[styles.flexRow]}>
          <Button
            mode="contained"
            theme={themeFaceBook}
            style={[styles.flex1, styles.buttonRadius]}
            icon={() => (
              <EvilIcons name="sc-facebook" size={24} color="white" />
            )}
            uppercase={false}
            labelStyle={[styles.marginLeft5, styles.letterSpacing]}
          >
            Facebook
          </Button>
          <Button
            mode="contained"
            theme={themeGoogle}
            style={[styles.flex1, styles.marginLeft20, styles.buttonRadius]}
            icon={() => <Zocial name="google" size={20} color="white" />}
            uppercase={false}
            labelStyle={[styles.marginLeft5, styles.letterSpacing]}
          >
            Google
          </Button>
        </View>
      </View>
    </View>
  );
}

export default LoginForm;