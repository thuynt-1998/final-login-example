import React, { useCallback, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { useForm } from "react-hook-form";
import { styles } from "../Login.style";

function LoginForm(props) {
  const { register, handleSubmit, setValue, errors } = useForm();
  const { setIsLogin, onLoginRequest } = props;
  useEffect(() => {
    register("username", { required: true });
    register("password", { required: true });
  }, [register]);
  const onClickLogin = useCallback((data) => {
    onLoginRequest(data.username, data.password);
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
        {errors.username?.type === "required" &&
          "Tên tài khoản không được rỗng"}
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
        {errors.password?.type === "required" && "Mật khẩu không được rỗng"}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onClickLogin)}
      >
        <Text style={styles.textButton}> Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginForm;
