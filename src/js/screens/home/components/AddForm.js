import React, { useEffect, useCallback } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
} from "react-native";
import { useForm } from "react-hook-form";
import { styles } from "../Home.style";
import Creators from "../../../action";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { valid } from "../ToDo.valid";
function AddForm(props) {
  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(valid),
  });
  const dispatch = useDispatch();
  const onAdd = useCallback((data) => {
    Keyboard.dismiss();
    dispatch(Creators.addToDo({ title: data.task }));
  }, []);
  useEffect(() => {
    register("task");
  }, [register]);
  return (
    <View>
      <View style={[styles.flexRow, styles.paddingOne]}>
        <Text style={[styles.label]}>Công việc </Text>
        <TextInput
          style={[styles.input, styles.flexOne]}
          name="task"
          onChangeText={(text) => setValue("task", text)}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonLogout, styles.marginOne]}
        onPress={handleSubmit(onAdd)}
      >
        <Text style={styles.textButtonLogout}>Thêm</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddForm;
