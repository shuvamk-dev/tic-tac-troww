import { START_GAME } from '../../actionTypes/game/game';

const initialGameState = {
  hasGameStarted: false,
  firstPlayerName: "",
  secondPlayerName: "",
};
export const gameReducer = (
  state = initialGameState,
  action: { type: string; data: any }
) => {
  switch (action.type) {
    case START_GAME: {
      return {
        ...state,
        firstPlayerName: action.data.firstPlayer,
        secondPlayerName: action.data.secondPlayer,
        hasGameStarted: true,
      };
    }
    default:
      return state;
  }
};
