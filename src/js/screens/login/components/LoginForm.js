import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  Keyboard,
  TextInput as TextInputRender,
} from "react-native";
import { useForm } from "react-hook-form";
import { styles } from "../Login.style";
import { yupResolver } from "@hookform/resolvers/yup";
import { valid } from "../LoginForm.valid";
import { Button, TextInput } from "react-native-paper";
import InputLogin from "./InputLogin";
import {
  Ionicons,
  MaterialCommunityIcons,
  EvilIcons,
  Zocial,
  Fontisto,
} from "@expo/vector-icons";
import { themeLogin, themeFaceBook, themeGoogle } from "../theme";

function LoginForm(props) {
  const { register, handleSubmit, setValue, errors } = useForm({
    resolver: yupResolver(valid),
  });
  const { onLoginRequest } = props;
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    register("username");
    register("password");
  }, [register]);
  const onClickLogin = useCallback((data) => {
    onLoginRequest(data.username, data.password);
    Keyboard.dismiss();
    setIsLogin(true);
  }, []);
  return (
    <View style={[styles.marginContainer, styles.flex1]}>
      <View style={[styles.flex1, styles.flexRow]}>
        <Text style={[styles.logo]}>digitm</Text>
      </View>
      <View style={{ flex: 2 }}>
        <InputLogin
          label="username"
          setValue={setValue}
          errors={errors.username}
          title="Email"
          left={() => (
            <Fontisto name="email" size={20} color="rgb(179,189,197)" />
          )}
          secureTextEntry={false}
        />
        <InputLogin
          label="password"
          setValue={setValue}
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
            style={styles.fontWeightOne}
            labelStyle={[styles.labelLink, styles.letterSpacing]}
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
