import {
  call,
  all,
  take,
  put,
  takeEvery,
  fork,
  cancel,
} from "redux-saga/effects";
import Creators, { Types } from "../action";
import Api from "../sevices/api/LoginServices";

export default function* watcherLoginSaga() {
  yield takeEvery(Types.LOGIN, loginFlow);
}

function* authorize(username, password) {
  const { originalError, data, status } = yield call(
    Api.author,
    username,
    password
  );
  console.log(status);
  if (originalError) {
    yield put(Creators.loginFailed({ error: originalError.message, status }));
  } else {
    console.log(data);
    yield put(Creators.loginSuccess(data));
    yield call(Api.setItem, data);
    return data;
  }
}
function* loginFlow() {
  while (true) {
    const { username, password } = yield take(Types.LOGIN_REQUEST);
    const task = yield fork(authorize, username, password);
    // console.log(token);
    // if (token) {
    // yield call(Api.setItem, token);
    const action = yield take([Types.LOGOUT, Types.LOGIN_FAILED]);
    if (action.type === Types.LOGOUT) {
      yield cancel(task);
    }
    yield call(Api.getItem);
    // }
  }
}
