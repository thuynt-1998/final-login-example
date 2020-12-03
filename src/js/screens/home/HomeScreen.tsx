import React, { useCallback } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import Creators from "../../action";
import { styles } from "./Home.style";
import ToDoList from "./components/ToDoList";
import AddForm from "./components/AddForm";

interface StateProps {
  auth: { token: { user: string } }
}
const HomeScreen = () => {
  const username = useSelector((state: StateProps) => {
    return state.auth.token.user ? state.auth.token.user : "";
  });
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(Creators.reset()), []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="rgb(99,177,28)" translucent></StatusBar>
      <View>
        <View
          style={[
            styles.containerTop,
            styles.flexRow,
            styles.paddingOne,
            styles.backgroundColor,
          ]}
        >
          <View style={[styles.flexRow, styles.flexOne]}>
            <FontAwesome name="user-circle-o" size={34} color="white" />
            <Text style={styles.textUser}> {username}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={onLogout} style={styles.buttonLogout}>
              <Text style={styles.textButtonLogout}> Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <AddForm />
        <ToDoList />
      </View>
    </SafeAreaView>
  );
}
export default HomeScreen;