import './gameButtons.css';

import React from 'react';

const GameButtons = () => {
  const handleUndoBtnClick = () => {
    console.log("Undo Done");
  };
  const handleMuteBtnClick = () => {
    console.log("Mute Done");
  };
  const handleResetBtnClick = () => {
    console.log("Game Reset");
  };
  return (
    <div className="gbs01Container">
      <div className="gbs01Icon" onClick={handleUndoBtnClick}>
        <i className="fi-rr-undo flaticon"></i>
      </div>
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
