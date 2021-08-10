import {
  HANDLE_NEXT_PAGE,
  HANDLE_PREV_PAGE,
} from '../../actionTypes/leaderboard/leaderboard';

const initialMatchList = [
  {
    id: 1,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2CI",
    winner: "BOTH",
  },
  {
    id: 2,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2CI",
    winner: "2jke",
  },
  {
    id: 3,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2CI",
    winner: "wsfasfw",
  },
  {
    id: 4,
    playedAt: Date.now(),
    firstPlayer: "ICdhbdhbd",
    secondPlayer: "2CIdjbdjbdjb",
    winner: "BOTH",
  },
  {
    id: 5,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2CI",
    winner: "2sf2",
  },
  {
    id: 6,
    playedAt: Date.now(),
    firstPlayer: "IafasfasC",
    secondPlayer: "2CI",
    winner: "9sh",
  },
  {
    id: 1,
    playedAt: Date.now(),
    firstPlayer: "ICsdfasf",
    secondPlayer: "2CI",
    winner: "BOTH",
  },
  {
    id: 2,
    playedAt: Date.now(),
    firstPlayer: "ICsdsdsd",
    secondPlayer: "2CI",
    winner: "2jke",
  },
  {
    id: 3,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2fffCI",
    winner: "ww",
  },
  {
    id: 4,
    playedAt: Date.now(),
    firstPlayer: "ICdhbdhbd",
    secondPlayer: "2CIdjbdjbdjb",
    winner: "BOTH",
  },
  {
    id: 5,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2fffI",
    winner: "22",
  },
  {
    id: 6,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2CI",
    winner: "9sh",
  },
  {
    id: 1,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2CI",
    winner: "BOTH",
  },
  {
    id: 2,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2CI",
    winner: "2jke",
  },
  {
    id: 3,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2CI",
    winner: "wfsfw",
  },
  {
    id: 4,
    playedAt: Date.now(),
    firstPlayer: "ICdhbdhbd",
    secondPlayer: "2CIdjbdjbdjb",
    winner: "BOTH",
  },
  {
    id: 5,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2CfafasI",
    winner: "22",
  },
  {
    id: 6,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2CI",
    winner: "9asfsh",
  },
];

const initialState = {
  matchList: initialMatchList,
  currentPage: 1,
  isNextPossible: true,
  isPrevPossible: false,
  currentList: initialMatchList.slice(0, 5),
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
