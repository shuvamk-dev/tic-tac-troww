import './gameForm.css';

import React, { useState } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { startGame } from '../../../../reduxStore/actions/game/game';
import { RootState } from '../../../../reduxStore/store/store';
import { getUserAvatar } from '../../../../utils/gameFunctions';

const GameForm = () => {
  const { firstPlayerName, secondPlayerName } = useSelector(
    (state: RootState) => state.game
  );
  const [firstPlayer, setFirstPlayer] = useState<string>(firstPlayerName);
  const [secondPlayer, setSecondPlayer] = useState<string>(secondPlayerName);
  const [firstPlayerAvatar, setFirstPlayerAvatar] = useState<string>(() =>
    getUserAvatar(firstPlayerName)
  );
  const [secondPlayerAvatar, setSecondPlayerAvatar] = useState<string>(
    getUserAvatar(secondPlayerName)
  );
  const hanldeFirstPlayerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstPlayer(e.target.value);
    setFirstPlayerAvatar(getUserAvatar(e.target.value));
  };
  const hanldeSecondPlayerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondPlayer(e.target.value);
    setSecondPlayerAvatar(getUserAvatar(e.target.value));
  };
  const dispatch = useDispatch();
  const handleStartBtn = () => {
    if (!firstPlayer || !secondPlayer) {
      return console.log("Enter Both Name");
    } else {
      dispatch(
        startGame({
          firstPlayer,
          secondPlayer,
        })
      );
    }
  };
  return (
    <div className="gform01Container">
      <div className="gform01Name">
        <div className="gform01InputBox">
          <label>Player 1</label>
          <input
            onChange={(e) => hanldeFirstPlayerInput(e)}
            value={firstPlayer}
          />
        </div>
        <img
          src={firstPlayerAvatar}
          alt={firstPlayer}
          className="gform01Avatar"
        />
      </div>
      <div className="gform01Name">
        <div className="gform01InputBox">
          <label>Player 2</label>
          <input
            onChange={(e) => hanldeSecondPlayerInput(e)}
            value={secondPlayer}
          />
        </div>

        <img
          src={secondPlayerAvatar}
          alt={firstPlayer}
          className="gform01Avatar"
        />
      </div>
      <button className="gform01StartBtn" onClick={handleStartBtn}>
        Start
      </button>
    </div>
  );
};

export default GameForm;
