import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';

import { styles } from "../Home.style";
import Creators from "../../../action";
import TodoServices from "../../../sevices/api/TodoServices";

interface ItemProps {
  id: number;
  title: string
}
interface StateProps {
  task: { toDo: Array<ItemProps> }
}

const valid = yup.object().shape({
  title: yup.string().required('Task is not empty'),
});
const ToDo = () => {
  const toDo = useSelector((state: StateProps) => state.task.toDo);

  const dispatch = useDispatch();
  const [selected, setSelected] = useState(-1);
  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(valid),
    defaultValues: { title: "" }
  });
  const onSave = useCallback(
    (data: { title: string }, index: number) => {
      Keyboard.dismiss();
      TodoServices.updateTodo(index, data)
      dispatch(Creators.todoRequest())
      setSelected(-1);
      reset();
    },
    [toDo]
  );
  const onEdit = useCallback((index: number) => {
    setSelected(index);
    reset();
  }, []);
  const onRemove = useCallback((index: number) => {
    TodoServices.remove(index)
    dispatch(Creators.todoRequest())
    setSelected(-1);
  }, [toDo, dispatch]);

  const renderItem = useCallback(
    ({ index, item }) => {
      return (
        <View style={[styles.flexRow, styles.paddingTwo]}>
          <Text style={styles.flexOne}>{index}</Text>
          <TouchableOpacity
            onPress={() => onEdit(item.id)}
            style={[styles.flexTwo]}
          >
            {selected === index ? (
              <Controller
                name="title"
                control={control}

                render={({ onChange, value }) => (
                  <TextInput
                    defaultValue={item.title}
                    onChangeText={onChange}
                    autoFocus
                    multiline
                  />
                )}
              />

            ) : (
                <Text style={[styles.flexTwo, styles.color]}>{item.title}</Text>
              )}
          </TouchableOpacity>
          {selected === index && (
            <TouchableOpacity
              onPress={handleSubmit((data: any) => onSave(data, selected))}
              style={[styles.flexOne]}
            >
              <MaterialIcons name="edit" size={24} color="black" />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[styles.flexOne]}
            onPress={() => onRemove(item.id)}
          >
            <MaterialIcons name="delete" size={20} color="black" />
          </TouchableOpacity>
        </View>
      );
    },
    [selected, toDo]
  );
  return (
    <FlatList
      data={toDo}
      keyExtractor={(item: any) => item.id.toString()}
      renderItem={renderItem}
      style={styles.paddingOne}
      extraData={selected}
    />
  );
}

export default ToDo;
