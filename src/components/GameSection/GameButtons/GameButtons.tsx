import './gameButtons.css';

import React from 'react';

import { useDispatch } from 'react-redux';

import { resetGame } from '../../../reduxStore/actions/game/game';

const GameButtons = () => {
  const dispatch = useDispatch();
  const handleUndoBtnClick = () => {
    console.log("Undo Done");
  };
  const handleMuteBtnClick = () => {
    console.log("Mute Done");
  };
  const handleResetBtnClick = () => {
    dispatch(resetGame());
  };
  return (
    <div className="gbs01Container">
      <button className="gbs01Icon" onClick={handleUndoBtnClick}>
        <i className="fi-rr-undo flaticon"></i>
      </button>
      <div className={`gbs01Icon gbs10MuteIcon`} onClick={handleMuteBtnClick}>
        <i className="fi-rr-volume flaticon"></i>
      </div>
      <div className="gbs01Icon" onClick={handleResetBtnClick}>
        <i className="fi-rr-trash flaticon"></i>
      </div>
    </div>
  );
};

export default GameButtons;
