import {actionTypes} from '../Actionypes';
import {ConnectionInfoActions} from '../types';

const initialState = {
  isConnected: true,
};

export const connectionInfoReducer = (
  state = initialState,
  action: ConnectionInfoActions,
) => {
  switch (action.type) {
    case actionTypes.SET_CONNECTION_INFO:
      return {
        ...state,
        isConnected: action.payload.isConnected,
      };

    default:
      return state;
  }
};
