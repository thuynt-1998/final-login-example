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

function HomeScreen(props) {
  const username = useSelector((state) => {
    return state.token.user;
  });
  const dispatch = useDispatch();
  const onLogout = () => dispatch(Creators.logout());
  function onClicklogout() {
    onLogout();
  }
  return (
    <SafeAreaView style={{}}>
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
      <View style={{ flex: 3 }}>
        <Text>Xin chào {username}</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerTop: {
    height: 100,
    backgroundColor: "rgb(99,177,28)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  buttonLogout: {
    backgroundColor: "rgb(99,177,28)",
    width: 90,
    borderRadius: 10,
    height: 40,
    borderColor: "white",
    borderWidth: 1,
  },
  textButtonLogout: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
  },
});
export default HomeScreen;
