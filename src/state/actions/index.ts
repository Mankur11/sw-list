import {actionTypes} from '../Actionypes';
import {
  FetchPeopleFailure,
  FetchPeopleFailurePayload,
  FetchPeopleRequest,
  FetchPeopleSuccess,
  FetchPeopleSuccessPayload,
  SetConnectionInfo,
  SetConnectionInfoPayload,
} from '../types';

export const fetchPeopleRequest = (): FetchPeopleRequest => ({
  type: actionTypes.FETCH_PEOPLE_REQUEST,
});

export const fetchPeopleSuccess = (
  payload: FetchPeopleSuccessPayload,
): FetchPeopleSuccess => ({
  type: actionTypes.FETCH_PEOPLE_SUCCESS,
  payload,
});

export const fetchPeopleFailure = (
  payload: FetchPeopleFailurePayload,
): FetchPeopleFailure => ({
  type: actionTypes.FETCH_PEOPLE_FAILURE,
  payload,
});

export const setConnectionState = (
  payload: SetConnectionInfoPayload,
): SetConnectionInfo => ({
  type: actionTypes.SET_CONNECTION_INFO,
  payload,
});
