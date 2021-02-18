import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import LoginServices from './LoginServices';

const restBase = () => {
  return LoginServices.getItem().then((res) => {
    return res ? `/users/${JSON.parse(res)}` : null;
  });
};

const updateInfo = async (data: any) => {
  let res = await restBase();
  let resp = res && (await database().ref(res).update(data));
  return resp;
};
const getUser = async () => {
  const data = {
    username: '',
    image: '',
    avatar: '',
    birthday: '',
    firstname: '',
    lastname: '',
    sex: '',
  };
  let res = await restBase();
  if (res) {
    await database()
      .ref(res + '')
      .once('value', (snap: any) => {
        snap.forEach((data1) => {
          if (data1.key !== 'todos') {
            data[data1.key] = data1.val();
          }
        });
      });
  }
  return data;
};
export default {updateInfo, getUser};
