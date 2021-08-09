import './gameSection.css';

import React from 'react';

import GameButtons from './GameButtons/GameButtons';
import GameGrid from './GameGrid/GameGrid';

const GameSection = () => {
  return (
    <div className="sectionPadding">
      <div className="gs01Title">Tic-Tac-Troww</div>
      <div>Welcome, select a mode to start</div>
      <GameGrid />
      <GameButtons />
    </div>
  );
};

export default GameSection;
