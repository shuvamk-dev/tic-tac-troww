import './square.css';

import { useSelector } from 'react-redux';

import { RootState } from '../../../reduxStore/store/store';

type Player = "X" | "O" | "BOTH" | null;
function Square({
  value,
  onClick,
  winner,
}: {
  winner: Player;
  value: Player;
  onClick: () => void;
}) {
  const { firstPlayerName } = useSelector((state: RootState) => state.game);
  const symbol = value === firstPlayerName ? "X" : "O";
  if (!value) {
    return (
      <button className="square" onClick={onClick} disabled={Boolean(winner)} />
    );
  }
  return (
    <button className={`square square_${symbol.toLocaleLowerCase()}`} disabled>
      {symbol}
    </button>
  );
}

export default Square;
