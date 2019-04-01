import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./reducers";
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const reduxMiddleware = [
    thunkMiddleware,
    sagaMiddleware
];

export default createStore(rootReducer, {}, applyMiddleware(...reduxMiddleware));
sagaMiddleware.run(sagas);
