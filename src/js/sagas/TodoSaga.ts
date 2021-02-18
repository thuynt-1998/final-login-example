import {call, take, put, fork, cancel} from 'redux-saga/effects';

import Creators, {Types} from '../action';
import ProfileServices from '../sevices/api/ProfileServices';
import Api from '../sevices/api/TodoServices';

export function* getTodoList() {
  const list = yield call(Api.getTodos);
  yield put(Creators.addToDo(list));
}
