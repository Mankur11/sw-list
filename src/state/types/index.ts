import {IPeople} from '../../models/IPeople';
import {actionTypes} from '../Actionypes';

export interface PeopleState {
  pending: boolean;
  people: IPeople[];
  error: string | null;
}

export interface FetchPeopleSuccessPayload {
  people: IPeople[];
}

export interface FetchPeopleFailurePayload {
  error: string;
}

export interface SetConnectionInfoPayload {
  isConnected: boolean;
}

export interface FetchPeopleRequest {
  type: typeof actionTypes.FETCH_PEOPLE_REQUEST;
}

export type FetchPeopleSuccess = {
  type: typeof actionTypes.FETCH_PEOPLE_SUCCESS;
  payload: FetchPeopleSuccessPayload;
};

export type FetchPeopleFailure = {
  type: typeof actionTypes.FETCH_PEOPLE_FAILURE;
  payload: FetchPeopleFailurePayload;
};

export type SetConnectionInfo = {
  type: typeof actionTypes.SET_CONNECTION_INFO;
  payload: SetConnectionInfoPayload;
};

export type PeopleActions =
  | FetchPeopleRequest
  | FetchPeopleSuccess
  | FetchPeopleFailure;

export type ConnectionInfoActions = SetConnectionInfo;

export interface ResponseGenerator {
  _response: string;
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
