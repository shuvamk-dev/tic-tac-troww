import './table.css';

import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../../reduxStore/store/store';
import TableCard from './TableCard/TableCard';

const Table = () => {
  const { currentList } = useSelector((state: RootState) => {
    return state.leaderboard;
  });

  return (
    <div className="tbl01Container">
      {currentList.length ? (
        currentList.map(
          (match: {
            id: number;
            firstPlayer: string;
            secondPlayer: string;
            playedAt: number;
            winner: string;
          }) => <TableCard match={match} />
        )
      ) : (
        <div className="tbl01Empty">
          <img
            src={require("../../../assets/images/empty-table.png").default}
            alt="table is empty"
            className="tbl01EmptyImg"
          />
          <span>
            Uh Oh! There are no matches in records, play some and show your
            skills
          </span>
        </div>
      )}
    </div>
  );
};

export default Table;
