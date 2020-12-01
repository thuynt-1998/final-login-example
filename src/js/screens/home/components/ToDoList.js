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
import { styles } from "../Home.style";
import { MaterialIcons } from "@expo/vector-icons";
import Creators from "../../../action";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { valid } from "../ToDo.valid";
import { HelperText } from "react-native-paper";

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
    Keyboard.dismiss();
    dispatch(Creators.editToDo(index, { title: data.task }));
    setSelected(-1);
  }, []);
  const onEdit = useCallback((index) => {
    setSelected(index);
  }, []);
  const onRemove = useCallback((item) => {
    Keyboard.dismiss();
    dispatch(Creators.removeToDo(item));
    setSelected(-1);
  }, []);
  useEffect(() => {
    register("task");
  }, [register]);
  const renderItem = useCallback(
    ({ index, item }) => {
      return (
        <View style={[styles.flexRow, styles.paddingTwo]}>
          <Text style={styles.flexOne}>{index}</Text>
          <TouchableOpacity
            onPress={() => onEdit(index)}
            style={[styles.flexTwo]}
          >
            {selected === index ? (
              <View>
                <TextInput
                  defaultValue={item.title}
                  name="task"
                  onChangeText={(text) => {
                    setValue("task", text);
                  }}
                  autoFocus
                />
              </View>
            ) : (
              <Text style={[styles.flexTwo, styles.color]}>{item.title}</Text>
            )}
          </TouchableOpacity>

          <View style={[styles.flexOne]}>
            <TouchableOpacity
              onPress={handleSubmit((data) => onSave(data, index))}
            >
              <MaterialIcons name="edit" size={24} color="black" />
            </TouchableOpacity>
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
