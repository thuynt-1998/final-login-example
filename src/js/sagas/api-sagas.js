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
  const { originalError, data } = yield call(Api.author, username, password);
  if (originalError) {
    yield put(Creators.loginFailed(originalError.message));
  } else {
    yield put(Creators.loginSuccess(data));
    yield call(Api.setItem, data.authenticated);
    return data;
  }
}
function* loginFlow() {
  while (true) {
    const { username, password } = yield take(Types.LOGIN_REQUEST);
    const task = yield fork(authorize, username, password);
    const action = yield take([Types.RESET, Types.LOGIN_FAILED]);
    if (action.type === Types.RESET) {
      yield cancel(task);
    }
    yield call(Api.removeItem);
  }
}
