import {
  combineReducers,
  createStore,
} from 'redux';

import { gameReducer } from '../reducers/game/game';

const reducer = combineReducers({
  game: gameReducer,
});
export type RootState = ReturnType<typeof reducer>;

const initialState = {};

const store = createStore(reducer, initialState);

export default store;
