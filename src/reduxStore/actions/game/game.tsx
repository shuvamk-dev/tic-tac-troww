import {
  RESET_GAME,
  SET_SQUARE_VALUE,
  START_GAME,
} from '../../actionTypes/game/game';

export const startGame = (data: object) => {
  return {
    type: START_GAME,
    data,
  };
};

export const setSquareValue = (data: number) => {
  return {
    type: SET_SQUARE_VALUE,
    data,
  };
};

export const resetGame = () => {
  return {
    type: RESET_GAME,
  };
};
