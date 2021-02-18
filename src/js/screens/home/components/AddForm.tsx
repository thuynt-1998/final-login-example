import React, { useEffect, useCallback } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import { styles } from "../Home.style";
import Creators from "../../../action";
import TodoServices from "../../../sevices/api/TodoServices";

const valid = yup.object().shape({
  title: yup.string().required('Task is not empty'),
});
interface ItemProps {
  id: number;
  title: string
}
interface StateProps {
  task: { toDo: Array<ItemProps> }
}
const AddForm = () => {
  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(valid),
    defaultValues: { title: "" }
  });
  const idItem = useSelector((state: StateProps) => {
    return state.task.toDo;
  });
  const dispatch = useDispatch();
  const onAdd = useCallback(
    (data: { title: string }) => {
      Keyboard.dismiss();
      var id = idItem.length === 0 ? 0 : idItem[idItem.length - 1].id + 1;

      TodoServices.addTodo(id, { id, title: data.title })
      dispatch(Creators.todoRequest())
      reset();
    },
    [idItem, dispatch]
  );

  return (
    <View style={[styles.flexRow, styles.paddingOne, styles.containerTop]}>
      <Text style={styles.flexOne}>Task</Text>
      <Controller
        name="title"
        control={control}
        render={({ onChange, value }) => (
          <TextInput
            style={[styles.input, styles.flexThree]}
            onChangeText={onChange}
            value={value}
            multiline
          />
        )}

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
