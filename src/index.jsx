import React from 'react'
import {render} from 'react-dom'
import App from './App'
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./redux/reducers";
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reduxMiddleware = [
    thunkMiddleware,
    sagaMiddleware
];

const store =  createStore(rootReducer, {}, applyMiddleware(...reduxMiddleware));
sagaMiddleware.run(sagas);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)