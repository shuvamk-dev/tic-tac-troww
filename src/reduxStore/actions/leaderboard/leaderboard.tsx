import {
  HANDLE_NEXT_PAGE,
  HANDLE_PREV_PAGE,
  HANDLE_WINNER_DECLARE,
} from '../../actionTypes/leaderboard/leaderboard';

export const handleNextPage = () => {
  return {
    type: HANDLE_NEXT_PAGE,
  };
};

export const handlePrevPage = () => {
  return {
    type: HANDLE_PREV_PAGE,
  };
};

export const handleWinnerDeclare = () => {
  return {
    type: HANDLE_WINNER_DECLARE,
  };
};
