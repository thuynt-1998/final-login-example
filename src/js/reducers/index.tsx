import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import toDoReducer from "./ToDoReducer";

const rootReducer = combineReducers({ auth: authReducer, task: toDoReducer });
export default rootReducer;
