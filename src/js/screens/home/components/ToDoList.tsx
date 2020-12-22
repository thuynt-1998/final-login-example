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
import { MaterialIcons } from "react-native-vector-icons";
import { useForm } from "react-hook-form";

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
const ToDo = () => {
  const toDo = useSelector((state: StateProps) => state.task.toDo);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(-1);
  const { register, handleSubmit, setValue, reset } = useForm({
    resolver: yupResolver(valid),
  });
  const onSave = useCallback(
    (data: { task: string }, index: number, id: number) => {
      Keyboard.dismiss();
      dispatch(Creators.editToDo(index, { id: id, title: data.task }));
      setSelected(-1);
      reset();
    },
    [toDo]
  );
  const onEdit = useCallback((index: number) => {
    setSelected(index);
    reset();
  }, []);
  const onRemove = useCallback((item: ItemProps) => {
    Keyboard.dismiss();
    dispatch(Creators.removeToDo(item));
    setSelected(-1);
  }, []);
  useEffect(() => {
    register("task");
  }, [register]);
  const onValue = useCallback((text: string) => setValue("task", text), [])
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
                onChangeText={onValue}
                autoFocus
                multiline
              />
            ) : (
                <Text style={[styles.flexTwo, styles.color]}>{item.title}</Text>
              )}
          </TouchableOpacity>
          {selected === index && (
            <TouchableOpacity
              onPress={handleSubmit((data: any) => onSave(data, selected, item.id))}
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
