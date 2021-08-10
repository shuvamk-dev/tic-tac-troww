import './leaderboard.css';

import React from 'react';

import Table from './Table/Table';

const Leaderboard = () => {
  return (
    <div className="sectionPadding">
      <div className="lb01Title">Leaderboard</div>
      <Table />
    </div>
  );
};

export default Leaderboard;
