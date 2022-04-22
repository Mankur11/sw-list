import {all, fork} from 'redux-saga/effects';
import peopleSaga from './peopleSaga';

export function* rootSaga() {
  yield all([fork(peopleSaga)]);
}
