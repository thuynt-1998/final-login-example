import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/index";
import apiSaga from "../sagas/api-sagas";

const initialSagaMiddleware = createSagaMiddleware();
const middleware = [initialSagaMiddleware];

const store = configureStore({ reducer: rootReducer, middleware });
initialSagaMiddleware.run(apiSaga);

export default store;
