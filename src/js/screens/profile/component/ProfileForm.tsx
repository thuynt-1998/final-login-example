import React, { useCallback, useEffect } from "react";
import { View, ScrollView, } from "react-native";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { DefaultTheme, useNavigation } from "@react-navigation/native";
import { Button, } from "react-native-paper";
import { parseISO } from 'date-fns'

import HeaderForm from "./HeaderForm";
import ProfileComponent from "./ProfileComponent";
import Creators from "../../../action";
import { styles } from "../ProfileScreen.style";
import ProfileServices from "../../../sevices/api/ProfileServices";

const ProfileForm = () => {
  const user = useSelector((state: any) => {
    return state.task.user
  })
  const { handleSubmit, errors, control, reset } = useForm({
    defaultValues: {
      firstname: user && user.firstname ? user.firstname : "",
      lastname: user && user.lastname ? user.lastname : "",
      username: user && user.username ? user.username : "",
      sex: user && user.sex ? user.sex : "male",
      birthday: user && user.birthday ? new Date(JSON.parse(user.birthday)) : ""
    }
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onSignup = useCallback(() => dispatch(Creators.signup()), [])
  useEffect(() => { onSignup(); reset() }, [])
  const submit = useCallback((data: any) => {
    for (let key in data) {
      if (data[key] === "") {
        delete data[key]
      }
      if (key === "birthday") {
        data[key] = JSON.stringify(data[key])
      }
    }
    ProfileServices.updateInfo(data);
  }, [navigation, user])
  return (
    <View style={{ flex: 1 }}>
      <HeaderForm />
      <ScrollView style={{ position: "relative", marginBottom: 50 }}>
        <ProfileComponent errors={errors} control={control} />
      </ScrollView>
      <View style={styles.containerButton}>
        <Button mode="contained"
          theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, primary: "rgb(19, 97, 140)", disabled: "white" } }}
          onPress={handleSubmit(submit)}
          style={styles.styleButton}
          labelStyle={{ color: "white", }}
        >
          Save
            </Button>
      </View>

    </View >
  );
};

export default ProfileForm;
