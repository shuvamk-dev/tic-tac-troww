import {
  HANDLE_NEXT_PAGE,
  HANDLE_PREV_PAGE,
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
