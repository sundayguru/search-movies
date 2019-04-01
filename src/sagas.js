import {all, fork} from 'redux-saga/effects';
import searchFlow from './search/sagas';

export default function* root() {
  yield all([
    fork(searchFlow),
  ]);
}
