import AsyncStorage from "@react-native-community/async-storage";
import api from "../../contants/https-base";

function author(username, password) {
  return api
    .get(
      `basic-auth/${username}/${password}`,
      {},
      {
        auth: { username: "thuy", password: "123" },
      }
    )
    .then((res) => res);
}
function getItem() {
  return AsyncStorage.getItem("token");
}
function setItem(token) {
  AsyncStorage.setItem("token", token);
}

export default { author, getItem, setItem };
