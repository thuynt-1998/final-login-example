import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import Creators from "../action";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./Style";

function HomeScreen(props) {
  const username = useSelector((state) => {
    return state.token.user;
  });
  const dispatch = useDispatch();
  const onLogout = () => dispatch(Creators.reset());
  function onClicklogout() {
    onLogout();
  }
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="rgb(99,177,28)"></StatusBar>
      <View style={styles.containerTop}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="user-circle-o" size={34} color="white" />
          <Text style={{ color: "white", fontSize: 20 }}> {username}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={onClicklogout} style={styles.buttonLogout}>
            <Text style={styles.textButtonLogout}> Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default HomeScreen;
