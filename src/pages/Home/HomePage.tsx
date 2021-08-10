import './homePage.css';

import React from 'react';

import GameSection from '../../components/GameSection/GameSection';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import Rules from '../../components/Rules/Rules';

const HomePage = () => {
  return (
    <div>
      <div className="hp01TitleContainer">
        <div className="hp01Title">Tic-Tac-Troww</div>
        <div>Getting Bored? So am I :\</div>
      </div>
      <div className="hp01Container">
        <Leaderboard />
        <GameSection />
        <Rules />
      </div>
    </div>
  );
};

export default HomePage;
