import './pagination.css';

import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../../../reduxStore/store/store';

const Pagination = () => {
  const { isNextPossible, isPrevPossible } = useSelector(
    (state: RootState) => state.leaderboard
  );
  return (
    <div className="pgn01Container">
      {isPrevPossible && (
        <button className="pgn01Btn pgn01PrevBtn">
          <i className="fi-rr-angle-left flaticon" /> Prev
        </button>
      )}
      {isNextPossible && (
        <button className="pgn01Btn pgn01NextBtn">
          Next <i className="fi-rr-angle-right flaticon"></i>
        </button>
      )}
    </div>
  );
};

export default Pagination;
