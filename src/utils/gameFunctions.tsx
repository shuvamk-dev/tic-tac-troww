import { Player } from '../types/gameTypes';

const calculateWinner = (squares: Player[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const getUserAvatar = (name: string | String) => {
  return `https://avatars.dicebear.com/api/avataaars/${name}.svg`;
};

const winnerDeclared = (state: any, winner: string) => {
  const leaderboardCheck = localStorage.getItem("leaderboard");
  let leaderboard = [];
  if (leaderboardCheck) {
    leaderboard = JSON.parse(leaderboardCheck);
    leaderboard.push({
      firstPlayer: state.firstPlayerName,
      secondPlayer: state.secondPlayerName,
      winner: winner,
      playedAt: Date.now(),
    });
  } else {
    leaderboard = [
      {
        firstPlayer: state.firstPlayerName,
        secondPlayer: state.secondPlayerName,
        winner: winner,
        playedAt: Date.now(),
      },
    ];
  }
  localStorage.setItem("firstPlayer", JSON.stringify(state.firstPlayerName));
  localStorage.setItem("secondPlayer", JSON.stringify(state.secondPlayerName));

  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
};

export { calculateWinner, getUserAvatar, winnerDeclared };