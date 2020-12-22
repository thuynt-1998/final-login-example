import React, { useEffect, useCallback } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
} from "react-native";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

import { styles } from "../Home.style";
import Creators from "../../../action";
import { valid } from "../ToDo.valid";

interface ItemProps {
  id: number;
  title: string
}
interface StateProps {
  task: { toDo: Array<ItemProps> }
}
const AddForm = () => {
  const { register, handleSubmit, setValue, reset, getValues } = useForm({
    resolver: yupResolver(valid),
  });
  const idItem = useSelector((state: StateProps) => {
    return state.task.toDo;
  });
  const dispatch = useDispatch();
  const onAdd = useCallback(
    (data: { task: string }) => {
      Keyboard.dismiss();
      var id = idItem.length === 0 ? 0 : idItem[idItem.length - 1].id + 1;
      dispatch(Creators.addToDo({ id, title: data.task }));
      reset();
    },
    [idItem]
  );
  const onValue = useCallback((text: string) => setValue("task", text), []);
  useEffect(() => {
    register("task");
  }, [register]);
  return (
    <View style={[styles.flexRow, styles.paddingOne, styles.containerTop]}>
      <Text style={styles.flexOne}>Task</Text>
      <TextInput
        style={[styles.input, styles.flexThree]}
        onChangeText={onValue}
        value={getValues().task}
        multiline
      />
      <TouchableOpacity
        style={[styles.buttonLogout, styles.marginOne, styles.flexOne]}
        onPress={handleSubmit(onAdd)}
      >
        <Text style={styles.textButtonLogout}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddForm;
