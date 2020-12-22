import AsyncStorage from "@react-native-community/async-storage";
import api from "../../contants/https-base";

const author = (username: string, password: string) => {
  return api
    .get(
      `basic-auth/${username}/${password}`,
      {},
      {
        auth: { username, password },
      }
    )
    .then((res) => res);
};
const removeItem = () => {
  return AsyncStorage.removeItem("token");
};
const setItem = (token: string) => {
  AsyncStorage.setItem("token", JSON.stringify(token));
};

export default { author, removeItem, setItem };
