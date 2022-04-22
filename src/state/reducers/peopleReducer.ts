import {actionTypes} from '../Actionypes';
import {PeopleActions, PeopleState} from '../types';

const initialState: PeopleState = {
  pending: false,
  people: [],
  error: null,
};

export default (state = initialState, action: PeopleActions) => {
  switch (action.type) {
    case actionTypes.FETCH_PEOPLE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case actionTypes.FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        pending: false,
        people: action.payload.people,
        error: null,
      };
    case actionTypes.FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        pending: false,
        people: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
