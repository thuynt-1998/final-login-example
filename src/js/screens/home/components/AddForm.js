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
  const { register, handleSubmit, setValue, reset, getValues } = useForm({
    resolver: yupResolver(valid),
  });
  const dispatch = useDispatch();
  const onAdd = useCallback((data) => {
    Keyboard.dismiss();
    dispatch(Creators.addToDo({ title: data.task }));
    reset();
  }, []);
  useEffect(() => {
    register("task");
  }, [register]);
  return (
    <View style={[styles.flexRow, styles.paddingOne, styles.containerTop]}>
      <Text style={styles.flexOne}>Công việc </Text>
      <TextInput
        style={[styles.input, styles.flexThree]}
        name="task"
        onChangeText={(text) => setValue("task", text)}
        value={getValues().task}
      />
      <TouchableOpacity
        style={[styles.buttonLogout, styles.marginOne, styles.flexOne]}
        onPress={handleSubmit(onAdd)}
      >
        <Text style={styles.textButtonLogout}>Thêm</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddForm;
