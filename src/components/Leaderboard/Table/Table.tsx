import './table.css';

import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../../reduxStore/store/store';
import TableCard from './TableCard/TableCard';

const Table = () => {
  const { matchList, currentList } = useSelector(
    (state: RootState) => state.leaderboard
  );
  return (
    <div className="tbl01Container">
      {currentList.length ? (
        currentList.map((match) => <TableCard match={match} />)
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

export default Table;
