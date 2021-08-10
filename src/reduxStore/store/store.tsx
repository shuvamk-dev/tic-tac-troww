import {
  combineReducers,
  createStore,
} from 'redux';

import { gameReducer } from '../reducers/game/game';
import { leaderboardReducer } from '../reducers/leaderboard/leaderboard';

const reducer = combineReducers({
  game: gameReducer,
  leaderboard: leaderboardReducer,
});
export type RootState = ReturnType<typeof reducer>;

const initialState = {};

const store = createStore(reducer, initialState);

export default store;
