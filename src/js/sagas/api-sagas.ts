import { call, take, put, fork, cancel, takeLatest } from "redux-saga/effects";
import Creators, { Types } from "../action";
import Api from "../sevices/api/LoginServices";

export default function* watcherLoginSaga() {
  yield takeLatest(Types.LOGIN, loginFlow);
}

export function* authorize(username: string, password: string) {
  const { originalError, data, status } = yield call(
    Api.author,
    username,
    password
  );
  if (originalError) {
    yield put(Creators.loginFailed({ error: originalError.message, status }));
  } else {
    yield put(Creators.loginSuccess(data));
    yield call(Api.setItem, data.authenticated);
    return data;
  }
}
export function* loginFlow() {
  while (true) {
    const { username, password } = yield take(Types.LOGIN_REQUEST);
    const task = yield fork(authorize, username, password);
    console.log(task);
    
    const action = yield take([Types.RESET, Types.LOGIN_FAILED]);
    console.log(action);
    
    if (action.type === Types.RESET) {
      yield cancel(task);
    }
    yield call(Api.removeItem);
  }
}
