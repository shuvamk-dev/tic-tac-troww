import {
  calculateWinner,
  winnerDeclared,
} from '../../../utils/gameFunctions';
import {
  RESET_GAME,
  SET_SQUARE_VALUE,
  START_GAME,
} from '../../actionTypes/game/game';

const getFirstname = () => {
  const name = localStorage.getItem("firstPlayer");
  let firstname = "";
  if (name) {
    firstname = JSON.parse(name);
  }
  return firstname;
};
const getSecondName = () => {
  const name = localStorage.getItem("secondPlayer");
  let secondName = "";
  if (name) {
    secondName = JSON.parse(name);
  }
  return secondName;
};
const initialGameState = {
  hasGameStarted: false,
  firstPlayerName: getFirstname(),
  secondPlayerName: getSecondName(),
  currentPlayer: "",
  winner: null,
  squares: Array(9).fill(null),
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
        currentPlayer: action.data.firstPlayer,
      };
    }
    case SET_SQUARE_VALUE: {
      const { data } = action;
      const newData = state.squares.map((val, i) => {
        if (i === data) {
          return state.currentPlayer;
        }
        return val;
      });
      let winner = calculateWinner(newData);
      if (winner) {
        winnerDeclared(state, winner);
      }
      if (!winner && !newData.filter((square) => !square).length) {
        winner = "BOTH";
        winnerDeclared(state, winner);
      }
      return {
        ...state,
        squares: newData,
        currentPlayer:
          state.currentPlayer === state.firstPlayerName
            ? state.secondPlayerName
            : state.firstPlayerName,
        winner: winner,
      };
    }
    case RESET_GAME: {
      return {
        ...state,
        squares: Array(9).fill(null),
        hasGameStarted: false,
        currentPlayer: "",
        winner: null,
      };
    }
    default:
      return state;
  }
};
