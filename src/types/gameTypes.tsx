export type Player = "X" | "O" | "BOTH" | null;
export type MatchType = {
  match: {
    id: number;
    firstPlayer: string;
    secondPlayer: string;
    playedAt: number;
    winner: string;
  };
};
