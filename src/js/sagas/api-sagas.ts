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
