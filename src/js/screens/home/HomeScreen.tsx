import React, { useCallback } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Creators from "../../action";
import { styles } from "./Home.style";
import ToDoList from "./components/ToDoList";
import AddForm from "./components/AddForm";
import { useNavigation } from "@react-navigation/native";

interface StateProps {
  auth: { token: { user: string } }
}
const HomeScreen = () => {

  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(Creators.reset()), []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="rgb(19,97,140)" translucent></StatusBar>
      <View>
        <View
          style={[
            styles.containerTop,
            styles.flexRow,
            styles.paddingOne,
            styles.backgroundColor,
          ]}
        >
          <TouchableOpacity style={[styles.flexRow, styles.flexOne]} >

            <FontAwesome name="user-circle-o" size={34} color="white" />
          </TouchableOpacity>
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
