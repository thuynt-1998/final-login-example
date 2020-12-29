import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from 'react-native-google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

import api from '../../contants/https-base';

const loginGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const {idToken} = await GoogleSignin.signIn();
    const credential = auth.GoogleAuthProvider.credential(idToken);
    return auth()
      .signInWithCredential(credential)
      .then((res) => res);
  } catch (error) {
    return error;
  }
};

const logoutGoogle = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    return auth()
      .signOut()
      .then((res) => {
        console.log(res);
        return res;
      });
  } catch (error) {
    return error;
  }
};
const loginFacebook = async () => {
  try {
    await LoginManager.logInWithPermissions(['public_profile', 'email']);

    const data = await AccessToken.getCurrentAccessToken();
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    return auth()
      .signInWithCredential(facebookCredential)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error.code);
      });
  } catch (error) {
    console.log(error.code);

    return error;
  }
};
const logoutFacebook = async () => {
  try {
    await LoginManager.logout();
    return auth()
      .signOut()
      .then((res) => {
        console.log(res);
        return res;
      });
  } catch (error) {
    return error;
  }
};
const logoutDefault = async () => {
  await auth().signOut();
};
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
      return res;
    })
    .catch((error: any) => {
      return error;
    });
};

export default {
  author,
  removeItem,
  setItem,
  signup,
  loginGoogle,
  loginFacebook,
  logoutGoogle,
  logoutDefault,
  logoutFacebook,
};
