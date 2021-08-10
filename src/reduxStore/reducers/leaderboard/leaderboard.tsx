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
    secondPlayer: "2CI",
    winner: "22",
  },
  {
    id: 6,
    playedAt: Date.now(),
    firstPlayer: "IC",
    secondPlayer: "2CI",
    winner: "9sh",
  },
];

const initialState = {
  matchList: initialMatchList,
  currentpage: 1,
  isNextPossible: true,
  isPrevPossible: false,
  currentList: initialMatchList.slice(0, 5),
};

export const leaderboardReducer = (
  state = initialState,
  action: { type: string; data: any }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
