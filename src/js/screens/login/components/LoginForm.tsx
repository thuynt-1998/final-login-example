import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Zocial from "react-native-vector-icons/Zocial";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { Controller } from 'react-hook-form';
import PushNotification from "react-native-push-notification";

import { styles } from "../Login.style";
import { valid } from "../LoginForm.valid";
import InputLogin from "./InputLogin";
import { themeLogin, themeFaceBook, themeGoogle } from "../theme";
import Creators from "../../../action";
import useNotification from "../../../notification/useNotification";

const LoginForm = (props: { navigation: any }) => {
  const notification = useNotification();

  const { handleSubmit, errors, control } = useForm({
    resolver: yupResolver(valid),
    defaultValues: { username: "", password: "", }
  });
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const onLoginRequest = useCallback(
    (username: string, password: string, type: number) => {
      dispatch(Creators.loginRequest(username, password, type));
    }, []
  );
  const onClickLogin = useCallback(({ username, password }: { username: string; password: string }) => {
<<<<<<< HEAD
    onLoginRequest(username, password, 0);
    Keyboard.dismiss();
    setIsLogin(true);
  }, [onLoginRequest]);
=======
    onLoginRequest(username, password);

    Keyboard.dismiss();
    setIsLogin(true);
  }, [onLoginRequest]);
  const onValue = useCallback((name: string, value: string) => setValue(name, value), []);
>>>>>>> 677cc4f... fix(setup): services- fix service firebase
  const onSignup = useCallback(() => props.navigation.push("signup"), [])
  const onLoginGoogle = useCallback(() => {
    onLoginRequest("", "", 2);
  }, [])
  const onLoginFacebook = useCallback(() => {
    onLoginRequest("", "", 1);
  }, [])

  return (
    <View style={[styles.marginContainer, styles.flex1]}>
      <View style={[styles.flex1, styles.flexRow]}>
        <Text style={[styles.logo]}>digitm</Text>
        <Button onPress={notification.sendMessage}> <FontAwesome name="bell-o" size={20} color="white" /></Button>
      </View>
      <View style={{ flex: 2 }}>
        <Controller
          control={control}
          name="username"
          render={({ onChange, onBlur, value, name }) => (<InputLogin
            label={name}
            value={value}
            onValue={onChange}
            errors={errors.username}
            title="Email"
            left={() => (
              <Fontisto name="email" size={20} color="rgb(179,189,197)" />
            )}
            secureTextEntry={false}
          />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ onChange, onBlur, value, name }) => (<InputLogin
            label={name}
            value={value}
            onValue={onChange}
            errors={errors.password}
            title="Password"
            left={() => (
              <MaterialCommunityIcons
                name="shield-lock-outline"
                size={20}
                color="rgb(179,189,197)"
              />
            )}
            secureTextEntry={true}
          />
          )}
        />
        <Button
          mode="contained"
          style={[styles.button, styles.buttonRadius]}
          disabled={isLogin}
          onPress={handleSubmit(onClickLogin)}
          uppercase={false}
          labelStyle={[styles.fontSize16, styles.letterSpacing]}
          icon={() => (
            <Fontisto
              name="locked"
              size={20}
              color={isLogin ? "rgba(0,0,0,0.3)" : "white"}
            />
          )
          }
        >
          Secure Login
        </Button>

        <View style={[styles.flexRow, styles.marginVertical]}>
          <Text style={styles.text}>Don't have an account ? </Text>
          <Button
            mode="text"
            theme={themeLogin}
            uppercase={false}
            labelStyle={[styles.labelLink, styles.letterSpacing, styles.fontWeightOne]}
            onPress={onSignup}
          >
            {"Sign up Now!"}
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
            onPress={onLoginFacebook}
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
            onPress={onLoginGoogle}
          >
            Google
          </Button>

        </View>
      </View>
    </View>
  );
}

export default LoginForm;
