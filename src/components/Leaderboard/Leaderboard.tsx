import './leaderboard.css';

import React from 'react';

import Pagination from './Table/Pagination/Pagination';
import Table from './Table/Table';

const Leaderboard = () => {
  return (
    <div className="sectionPadding lb01Container">
      <div className="lb01Title">Leaderboard</div>
      <Table />
      <Pagination />
    </div>
  );
};

export default Leaderboard;
