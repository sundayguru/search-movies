import {call, put, takeEvery, all} from 'redux-saga/effects';
import Api from './api';
import * as Actions from './redux/actions';
import * as Types from './redux/actionTypes';


function* getMovies() {
    try {
        console.log("LOADING")
        const response = yield call(Api.getMovies);
        console.log("RESP", response)
        yield put(Actions.getMoviesSuccess(response));
    } catch (error) {
        yield put(Actions.getMoviesFailure(error));
        if (error.response && error.response.status === 401) {
            // Unauthorized user
            console.log("Unauthorized user")
        }
    }
}

export default function* searchFlow() {
    yield all([
        takeEvery(Types.GET_MOVIES, getMovies),
    ]);
}