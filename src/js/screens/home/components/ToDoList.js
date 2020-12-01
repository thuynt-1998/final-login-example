import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../Home.style";
import { MaterialIcons } from "@expo/vector-icons";
import Creators from "../../../action";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { valid } from "../ToDo.valid";

function ToDo(props) {
  const toDo = useSelector((state) => {
    return state.task.toDo;
  });
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(-1);
  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(valid),
  });
  const onSave = useCallback((data, index) => {
    dispatch(Creators.editToDo(index, { title: data.task }));
    Keyboard.dismiss();
    setSelected(-1);
  }, []);
  const onEdit = useCallback((index) => setSelected(index), []);
  const onRemove = useCallback((item) => {
    dispatch(Creators.removeToDo(item));
    setSelected(-1);
  }, []);
  useEffect(() => {
    register("task");
  }, []);
  const renderItem = useCallback(
    ({ index, item }) => {
      return (
        <View style={[styles.flexRow, styles.alignItems, styles.paddingTwo]}>
          <Text style={styles.flexOne}>{index}</Text>
          {selected === index ? (
            <TextInput
              style={[styles.flexTwo, styles.color]}
              defaultValue={item.title}
              name="task"
              onChangeText={(text) => {
                setValue("task", text);
              }}
            />
          ) : (
            <Text style={[styles.flexTwo, styles.color]}>{item.title}</Text>
          )}
          <View style={[styles.flexOne]}>
            {selected === index ? (
              <TouchableOpacity
                onPress={handleSubmit((data) => onSave(data, index))}
              >
                <MaterialIcons name="save" size={20} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => onEdit(index)}>
                <MaterialIcons name="edit" size={20} color="black" />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            style={[styles.flexOne]}
            onPress={() => onRemove(item)}
          >
            <MaterialIcons name="delete" size={20} color="black" />
          </TouchableOpacity>
        </View>
      );
    },
    [selected]
  );
  return (
    <FlatList
      data={toDo}
      keyExtractor={(item) => item.title}
      renderItem={renderItem}
      style={styles.paddingOne}
      extraData={selected}
    />
  );
}

export default ToDo;
