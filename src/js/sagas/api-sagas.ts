import {
  call,
  take,
  put,
  fork,
  cancel,
  takeLatest,
  all,
} from 'redux-saga/effects';
import Creators, {Types} from '../action';
import Api from '../sevices/api/LoginServices';

export default function* watcherLoginSaga() {
  yield all([
    takeLatest(Types.LOGIN, loginFlow),
    takeLatest(Types.SIGNUP, signupFlow),
  ]);
}

export function* authorize(username: string, password: string) {
  const {originalError, data, status} = yield call(
    Api.author,
    username,
    password,
  );
  console.log(data);
  console.log(originalError);

  if (originalError) {
    yield put(Creators.loginFailed({error: originalError.message, status}));
  } else {
    yield put(Creators.loginSuccess(data));
    yield call(Api.setItem, data.authenticated);
    return data;
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
    console.log(data);
  }
}
