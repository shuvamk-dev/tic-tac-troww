import { START_GAME } from '../../actionTypes/game/game';

export const startGame = (data: object) => {
  return {
    type: START_GAME,
    data,
  };
};
