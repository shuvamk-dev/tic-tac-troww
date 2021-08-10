import './gameSection.css';

import React from 'react';

import GameButtons from './GameButtons/GameButtons';
import GameGrid from './GameGrid/GameGrid';

const GameSection = () => {
  return (
    <div className="sectionPadding gsec01Container">
      <GameGrid />
      <GameButtons />
    </div>
  );
};

export default GameSection;
