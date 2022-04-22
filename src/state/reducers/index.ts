import {combineReducers} from 'redux';
import {connectionInfoReducer} from './connectionInfoReducer';
import peopleReducer from './peopleReducer';

const reducers = combineReducers({
  people: peopleReducer,
  connectionState: connectionInfoReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
