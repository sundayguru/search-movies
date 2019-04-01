import {call, put, takeEvery, all} from 'redux-saga/effects'
import Api from './api'
import * as Actions from './redux/actions'
import * as Types from './redux/actionTypes'


function* getMovies() {
    try {
        const response = yield call(Api.getMovies)
        yield put(Actions.getMoviesSuccess(response))
    } catch (error) {
        yield put(Actions.getMoviesFailure(error))
        if (error.response && error.response.status === 401) {
            // Unauthorized user
            console.log("Unauthorized user")
        }
    }
}

function* loadMore(action) {
    try {
        const {page} = action
        const response = yield call(Api.loadMore, page)
        yield put(Actions.loadMoreSuccess(response))
    } catch (error) {
        yield put(Actions.loadMoreFailure(error))
        if (error.response && error.response.status === 401) {
            // Unauthorized user
            console.log("Unauthorized user")
        }
    }
}

export default function* searchFlow() {
    yield all([
        takeEvery(Types.GET_MOVIES, getMovies),
        takeEvery(Types.LOAD_MORE, loadMore),
    ]);
}