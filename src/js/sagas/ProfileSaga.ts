import {call, take, put, fork, cancel} from 'redux-saga/effects';

import Creators, {Types} from '../action';
import ProfileServices from '../sevices/api/ProfileServices';

export function* getProfile() {
  const user = yield call(ProfileServices.getUser);
  yield put(Creators.addUser(user));
}
