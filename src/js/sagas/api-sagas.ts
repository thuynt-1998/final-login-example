import {takeLatest, all, takeEvery} from 'redux-saga/effects';

import Creators, {Types} from '../action';
import Api from '../sevices/api/LoginServices';
import {loginFlow, signupFlow} from './LoginSaga';
import {getProfile} from './ProfileSaga';
import {getTodoList} from './TodoSaga';

export default function* watcherLoginSaga() {
  yield all([
    takeLatest(Types.LOGIN, loginFlow),
    takeLatest(Types.SIGNUP, signupFlow),
    takeLatest(Types.TODO_REQUEST, getTodoList),
    takeLatest(Types.USER_REQUEST, getProfile),
  ]);
}
<<<<<<< HEAD
=======

export function* authorize(username: string, password: string) {
  const {user, code} = yield call(Api.author, username, password);

  if (code) {
    yield put(Creators.loginFailed(code));
  } else {
    yield put(Creators.loginSuccess(user.uid));
    yield call(Api.setItem, user.uid);
    return user;
  }
}

export function* loginFlow() {
  while (true) {
    const {username, password} = yield take(Types.LOGIN_REQUEST);
    const task = yield fork(authorize, username, password);
    const action = yield take([Types.RESET, Types.LOGIN_FAILED]);
    if (action.type === Types.RESET) {
      yield cancel(task);
    }
    yield call(Api.removeItem);
  }
}

function* signupFlow() {
  while (true) {
    const {data} = yield take(Types.SIGNUP_REQUEST);
    const {code} = yield call(Api.signup, data.username, data.password);
    console.log(code);
    return code;
  }
}
>>>>>>> 677cc4f... fix(setup): services- fix service firebase
