import {createReducer} from 'reduxsauce';
import action, {Types} from '../action';

export const toDoState = {
  toDo: [],
  user: null,
};
export const addToDo = (state = toDoState, action: {task: any}) => {
  return Object.assign({}, state, {
    toDo: action.task,
  });
};
export const addUser = (state = toDoState, action: {user: any}) => {
  return {...state, user: action.user};
};
const HANDLERS = {
  [Types.ADD_TO_DO]: addToDo,
  [Types.ADD_USER]: addUser,
};

export default createReducer(toDoState, HANDLERS);
