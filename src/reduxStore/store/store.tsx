import {
  combineReducers,
  createStore,
} from 'redux';

import { gameReducer } from '../reducers/game/game';

const reducer = combineReducers({
  game: gameReducer,
});

const initialState = {};

const store = createStore(reducer, initialState);
export default store;
