import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import Creators from "../action";
import TextInput from "./components/TextInput";
import { styles } from "./Style";

function LoginScreen(props) {
  const [username, setUsername] = useState({ value: "", errorMessage: "" });
  const [password, setPassword] = useState({ value: "", errorMessage: "" });
  const [label, setLabel] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const dispatch = useDispatch();
  const onLoginRequest = (username, password) =>
    dispatch(Creators.loginRequest(username, password));
  const onLogin = () => dispatch(Creators.login());
  useEffect(() => {
    onLogin();
  }, []);
  function onClickLogin() {
    if (
      username.errorMessage === "" &&
      password.errorMessage === "" &&
      username.value !== "" &&
      password.value !== ""
    ) {
      setLabel("");
      onLoginRequest(username.value, password.value);
      setIsLogin(true);
    } else {
      setLabel("Tên tài khoản hoặc mật khẩu chưa đúng!");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar backgroundColor="white"></StatusBar>
        <Text style={styles.errorInput}> {label}</Text>
        <TextInput
          style={styles}
          label="Tài khoản"
          placeholder="Tên tài khoản"
          onChangeText={(text) => setUsername({ ...username, value: text })}
          onBlur={() => {
            if (username.value === "") {
              setUsername({
                ...username,
                errorMessage: "Tên tài khoản không được để trống",
              });
            } else {
              setUsername({
                ...username,
                errorMessage: "",
              });
            }
          }}
          value={username.value}
          error={username.errorMessage}
        />
        <TextInput
          style={styles}
          label="Mật khẩu"
          secureTextEntry
          value={password.value}
          error={password.errorMessage}
          onChangeText={(text) => setPassword({ ...password, value: text })}
          onBlur={() => {
            if (password.value === "") {
              setPassword({
                ...password,
                errorMessage: "Mật khẩu không được để trống",
              });
            } else {
              setPassword({
                ...password,
                errorMessage: "",
              });
            }
          }}
          placeholder="Mật khẩu"
        />

        <TouchableOpacity style={styles.button} onPress={onClickLogin}>
          <Text style={styles.textButton}> Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      {isLogin && (
        <View
          style={{
            flex: 1,
            marginTop: 30,
          }}
        >
          <ActivityIndicator color="primary" size="small" />
        </View>
      )}
    </SafeAreaView>
  );
}
export default LoginScreen;
