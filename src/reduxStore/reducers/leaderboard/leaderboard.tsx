import {
  HANDLE_NEXT_PAGE,
  HANDLE_PREV_PAGE,
} from '../../actionTypes/leaderboard/leaderboard';

const initialMatchList = () => {
  const leaderboardCheck = localStorage.getItem("leaderboard");
  let leaderboard = [];
  if (leaderboardCheck) {
    leaderboard = JSON.parse(leaderboardCheck);
  }
  return leaderboard;
};

const initialState = {
  matchList: initialMatchList().reverse(),
  currentPage: 1,
  isNextPossible: initialMatchList().length > 5,
  isPrevPossible: false,
  currentList: initialMatchList().reverse().slice(0, 5),
};

export const leaderboardReducer = (
  state = initialState,
  action: { type: string; data: any }
) => {
  switch (action.type) {
    case HANDLE_NEXT_PAGE: {
      const list = state.matchList.slice(
        state.currentPage * 5,
        (state.currentPage + 1) * 5
      );
      return {
        ...state,
        currentList: list,
        currentPage: state.currentPage + 1,
        isNextPossible: (state.currentPage + 1) * 5 < state.matchList.length,
        isPrevPossible: true,
      };
    }
    case HANDLE_PREV_PAGE: {
      const list = state.matchList.slice(
        (state.currentPage - 2) * 5,
        (state.currentPage - 1) * 5
      );
      return {
        ...state,
        currentList: list,
        currentPage: state.currentPage - 1,
        isNextPossible: true,
        isPrevPossible: state.currentPage - 1 !== 1,
      };
    }
    default:
      return state;
  }
};
