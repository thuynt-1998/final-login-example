import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  StatusBar,
  TextInput,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { useForm } from "react-hook-form";
import { styles } from "../Login.style";
import { yupResolver } from "@hookform/resolvers/yup";
import { valid } from "../LoginForm.valid";
import { Button } from "react-native-paper";

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
    <View>
      <StatusBar backgroundColor="white"></StatusBar>
      <Text style={styles.label}>Tên tài khoản</Text>
      <TextInput
        name="username"
        style={[styles.textInput, styles.textInputSuccess]}
        onChangeText={(text) => {
          setValue("username", text);
        }}
      />
      <Text style={styles.errorInput}>
        {errors.username && errors.username.message}
      </Text>
      <Text style={styles.label}>Mật khẩu</Text>
      <TextInput
        name="password"
        style={[styles.textInput, styles.textInputSuccess]}
        onChangeText={(text) => {
          setValue("password", text);
        }}
        secureTextEntry
      />
      <Text style={styles.errorInput}>
        {errors.password && errors.password.message}
      </Text>

      <Button
        mode="contained"
        style={styles.button}
        disabled={isLogin}
        onPress={handleSubmit(onClickLogin)}
      >
        Đăng nhập
      </Button>

      {isLogin && (
        <ActivityIndicator
          color="primary"
          size="small"
          style={styles.loading}
        />
      )}
    </View>
  );
}

export default LoginForm;
