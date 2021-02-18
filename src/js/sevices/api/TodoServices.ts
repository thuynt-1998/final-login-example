import database from '@react-native-firebase/database';
import LoginServices from './LoginServices';

const restBase = () => {
  return LoginServices.getItem().then((res) => {
    return res ? `/users/${JSON.parse(res)}/todos` : null;
  });
};
const addTodo = (index: any, data: any) => {
  return restBase().then((res) => {
    res
      ? database()
          .ref(res + `/${index}`)
          .set(data)
          .then((res) => {
            return res;
          })
      : '';
  });
};
const getTodos = async () => {
  const data = [];

  let res = await restBase();
  if (res) {
    await database()
      .ref(res)
      .once('value', (snap: any) => {
        snap.forEach((data1) => {
          if (data1.val()) {
            data.push(data1.val());
          }
        });
      });
  }
  return data;
};

const updateTodo = (index: any, data: any) => {
  return restBase().then((resp) => {
    resp
      ? database()
          .ref(resp + `/${index}`)
          .update(data)
          .then((res) => {
            return res;
          })
      : '';
  });
};
const remove = (index: any) => {
  return restBase().then((res) => {
    res
      ? database()
          .ref(res + `/${index}`)
          .remove()
      : '';
  });
};

export default {addTodo, getTodos, updateTodo, remove};
