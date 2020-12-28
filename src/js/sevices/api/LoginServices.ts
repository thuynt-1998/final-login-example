import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';

import api from '../../contants/https-base';

const author = (username: string, password: string) => {
  // return api
  //   .get(
  //     `basic-auth/${username}/${password}`,
  //     {},
  //     {
  //       auth: {username, password},
  //     },
  //   )
  //   .then((res) => res);
  return auth()
    .signInWithEmailAndPassword(username, password)
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      return error;
    });
};
const removeItem = () => {
  return AsyncStorage.removeItem('token');
};
const setItem = (token: string) => {
  AsyncStorage.setItem('token', JSON.stringify(token));
};
const signup = (username, password) => {
  return auth()
    .createUserWithEmailAndPassword(username, password)
    .then((res: any) => {
      console.log('res' + res);
      return res;
    })
    .catch((error: any) => {
      return error;
    });
};

export default {author, removeItem, setItem, signup};
