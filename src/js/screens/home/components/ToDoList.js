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

function ToDo(props) {
  const toDo = useSelector((state) => {
    return state.task.toDo;
  });
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(-1);
  const { register, handleSubmit, setValue, reset } = useForm({
    resolver: yupResolver(valid),
  });
  const onSave = useCallback(
    (data, index, id) => {
      Keyboard.dismiss();
      if (id === toDo[index].id)
        dispatch(Creators.editToDo(index, { id: id, title: data.task }));
      setSelected(-1);
      reset();
    },
    [toDo]
  );
  const onEdit = useCallback((index) => {
    setSelected(index);
    reset();
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
              <TextInput
                defaultValue={item.title}
                name="task"
                onChangeText={(text) => {
                  setValue("task", text);
                }}
                autoFocus
                multiline
              />
            ) : (
              <Text style={[styles.flexTwo, styles.color]}>{item.title}</Text>
            )}
          </TouchableOpacity>
          {selected === index && (
            <TouchableOpacity
              onPress={handleSubmit((data) => onSave(data, selected, item.id))}
              style={[styles.flexOne]}
            >
              <MaterialIcons name="edit" size={24} color="black" />
            </TouchableOpacity>
          )}

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
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      style={styles.paddingOne}
      extraData={selected}
    />
  );
}

export default ToDo;
