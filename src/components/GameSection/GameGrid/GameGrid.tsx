import './gameGrid.css';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { setSquareValue } from '../../../reduxStore/actions/game/game';
import { RootState } from '../../../reduxStore/store/store';
import GameForm from './GameForm/GameForm';
import Square from './Square';

function GameGrid() {
  const { hasGameStarted, squares, winner, currentPlayer } = useSelector(
    (state: RootState) => {
      return state.game;
    }
  );
  const dispatch = useDispatch();

  return (
    <div className="ggd01Container">
      <div>
        {hasGameStarted ? (
          <div className="ggd01Subtitle">It's {currentPlayer}'s turn</div>
        ) : (
          <div className="ggd01Subtitle">
            Enter Player Names to start the battle
          </div>
        )}
      </div>
      <div className="grid">
        {hasGameStarted ? (
          Array(9)
            .fill(null)
            .map((_, i) => {
              return (
                <Square
                  winner={winner}
                  key={i}
                  onClick={() => dispatch(setSquareValue(i))}
                  value={squares[i]}
                />
              );
            })
        ) : (
          <GameForm />
        )}
      </div>
    </div>
  );
}

export default GameGrid;
