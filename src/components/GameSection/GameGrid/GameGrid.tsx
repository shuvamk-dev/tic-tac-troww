import './gameGrid.css';

import {
  useEffect,
  useState,
} from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../../reduxStore/store/store';
import { Player } from '../../../types/gameTypes';
import { calculateWinner } from '../../../utils/gameFunctions';
import GameForm from './GameForm/GameForm';
import Square from './Square';

function GameGrid() {
  const { hasGameStarted } = useSelector((state: RootState) => state.game);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<Player>(null);

  function reset() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  }

  function setSquareValue(index: number) {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    }

    if (!w && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  });

  return (
    <div>
      <div className="grid">
        {hasGameStarted ? (
          Array(9)
            .fill(null)
            .map((_, i) => {
              return (
                <Square
                  winner={winner}
                  key={i}
                  onClick={() => setSquareValue(i)}
                  value={squares[i]}
                />
              );
            })
        ) : (
          <GameForm />
        )}
      </div>
      <button className="reset" onClick={reset}>
        RESET
      </button>
    </div>
  );
}

export default GameGrid;
