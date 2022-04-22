import axios from 'axios';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {fetchPeopleFailure, fetchPeopleSuccess} from '../actions';
import {IPeople} from '../../models/IPeople';
import {actionTypes} from '../Actionypes';
import {ResponseGenerator} from '../types';

const getPeople = () => axios.get<IPeople[]>('https://swapi.dev/api/people/');

function* fetchPeopleSaga() {
  try {
    const response: ResponseGenerator = yield call(getPeople);

    yield put(
      fetchPeopleSuccess({
        people: response.data.results,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchPeopleFailure({
        error: e.message,
      }),
    );
  }
}

function* peopleSaga() {
  yield all([takeLatest(actionTypes.FETCH_PEOPLE_REQUEST, fetchPeopleSaga)]);
}

export default peopleSaga;
