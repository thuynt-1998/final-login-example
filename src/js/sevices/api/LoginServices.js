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
function removeItem() {
  return AsyncStorage.removeItem("token");
}
function setItem(token) {
  AsyncStorage.setItem("token", JSON.stringify(token));
}

export default { author, removeItem, setItem };
