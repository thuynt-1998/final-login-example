import { createReducer } from "reduxsauce";
import { Types } from "../action";

export const toDoState = {
  toDo: [],
};
export const addToDo = (state = toDoState, action: { task: any }) => {
  return Object.assign({}, state, {
    toDo: state.toDo.concat(action.task),
  });
};
export const editToDo = (state = toDoState, action: { index: number, task: any }) => {
  return Object.assign({}, state, {
    toDo: state.toDo
      .slice(0, action.index)
      .concat(action.task)
      .concat(state.toDo.slice(action.index + 1)),
  });
};
export const removeToDo = (state = toDoState, action: { task: {id:number} }) => {  
  return Object.assign({}, state, {
    toDo: state.toDo.filter((item:{id:number}) => item.id!==action.task.id ),
  });
};

const HANDLERS = {
  [Types.ADD_TO_DO]: addToDo,
  [Types.EDIT_TO_DO]: editToDo,
  [Types.REMOVE_TO_DO]: removeToDo,
};

export default createReducer(toDoState, HANDLERS);
