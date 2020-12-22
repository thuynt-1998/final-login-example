import React, { useCallback, useEffect, useState } from "react";
import { View, ScrollView, Text, Platform, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import auth from '@react-native-firebase/auth';

import HeaderForm from "./HeaderForm";
import SignupComponent from "./SignupComponent";
import Creators from "../../../action";
import { valid } from "../Signup.valid";
import { Button, Checkbox } from "react-native-paper";
import { DefaultTheme, useNavigation } from "@react-navigation/native";
import { styles } from "../SignupScreen.style";

const SignUpForm = () => {
  const { register, handleSubmit, setValue, errors, getValues, setError, clearErrors } = useForm({
    resolver: yupResolver(valid),
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onSignup = useCallback(() => dispatch(Creators.signup()), [])
  useEffect(() => { onSignup() }, [])
  const onSignupRequest = useCallback((data: any) => dispatch(Creators.signupRequest(data)), [])
  const [checked, setChecked] = useState(false);

  const submit = useCallback((data: any) => {
    console.log(data);
    auth()
      .createUserWithEmailAndPassword(data.username, data.password)
      .then((res: any) => {
        console.log("res" + res);

        navigation.navigate("login")
      })
      .catch((error: any) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          Alert.alert(
            "",
            "Email này đã tồn tại.",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        }
      })

    // onSignupRequest(data);
  }, [])
  const onChangeChecked = useCallback(() => setChecked(!checked), [checked])

  return (
    <View style={{ flex: 1 }}><HeaderForm />
      <ScrollView style={{ position: "relative", marginBottom: 50 }}>

        <SignupComponent register={register} setValue={setValue} errors={errors} getValues={getValues} setError={setError} clearErrors={clearErrors} />
        <View style={[styles.radioStyle, styles.marginHorizontal20]}>
          <View style={styles.styleCustom}>
            {
              !checked && Platform.OS === "ios" &&
              <FontAwesome5
                name="square"
                size={20}
                color="rgb(179,189,197)"
                style={[styles.styleCustomItem, styles.styleCustomItem1]} />
            }
            <Checkbox status={checked ? "checked" : "unchecked"} color="white" onPress={onChangeChecked} />

          </View>
          <Text style={[styles.colorWhite, styles.flex1]}> Agree to the terms of use </Text>
        </View>
      </ScrollView>
      <View style={styles.containerButton}>
        <Button mode="contained"
          theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, primary: "rgb(19, 97, 140)", disabled: "ưhite" } }}
          onPress={handleSubmit(submit)}
          disabled={!checked}
          style={styles.styleButton}
          labelStyle={{ color: "white", }}
        >
          Submit
            </Button>
      </View>

    </View >
  );
};

export default SignUpForm;