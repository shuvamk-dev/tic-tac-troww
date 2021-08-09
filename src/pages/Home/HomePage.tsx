import './homePage.css';

import React from 'react';

import GameSection from '../../components/GameSection/GameSection';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import Rules from '../../components/Rules/Rules';

const HomePage = () => {
  return (
    <div className="hp01Container">
      <Leaderboard />
      <GameSection />
      <Rules />
    </div>
  );
};

export default HomePage;
