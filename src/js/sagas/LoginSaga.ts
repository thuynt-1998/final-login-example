import {call, take, put, fork, cancel} from 'redux-saga/effects';

import Creators, {Types} from '../action';
import Api from '../sevices/api/LoginServices';

function* authorize(username: string, password: string, type: number) {
  let userToken;
  let codeError;
  switch (type) {
    case 1:
      let res1 = yield Api.loginFacebook();
      userToken = res1.user;
      codeError = res1.code;
      break;
    case 2:
      let res2 = yield Api.loginGoogle();
      userToken = res2.user;
      codeError = res2.code;
      break;
    default:
      let res = yield call(Api.author, username, password);
      userToken = res.user;
      codeError = res.code;
      break;
  }

  if (codeError) {
    yield put(Creators.loginFailed(codeError));
  } else {
    yield put(Creators.loginSuccess(userToken.uid, type));
    yield call(Api.setItem, userToken.uid);
    return userToken;
  }
}

export function* loginFlow() {
  while (true) {
    const {username, password, number} = yield take(Types.LOGIN_REQUEST);
    const task = yield fork(authorize, username, password, number);
    const action = yield take([Types.RESET, Types.LOGIN_FAILED]);
    if (action.type === Types.RESET) {
      yield cancel(task);
    }
    switch (number) {
      case 1:
        yield Api.loginFacebook();
        break;
      case 2:
        yield Api.logoutGoogle();
        break;
      default:
        yield Api.logoutDefault;
        break;
    }
    yield call(Api.removeItem);
  }
}

export function* signupFlow() {
  while (true) {
    const {data} = yield take(Types.SIGNUP_REQUEST);
    const resp = yield call(Api.signup, data);
  }
}
