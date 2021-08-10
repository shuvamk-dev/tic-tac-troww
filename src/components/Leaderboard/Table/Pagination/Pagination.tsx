import './pagination.css';

import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  handleNextPage,
  handlePrevPage,
} from '../../../../reduxStore/actions/leaderboard/leaderboard';
import { RootState } from '../../../../reduxStore/store/store';

const Pagination = () => {
  const { isNextPossible, isPrevPossible } = useSelector(
    (state: RootState) => state.leaderboard
  );
  const dispatch = useDispatch();
  const gotoNextPage = () => {
    dispatch(handleNextPage());
  };
  const gotoPrevPage = () => {
    dispatch(handlePrevPage());
  };
  return (
    <div className="pgn01Container">
      {isPrevPossible && (
        <button className="pgn01Btn pgn01PrevBtn" onClick={gotoPrevPage}>
          <i className="fi-rr-angle-left flaticon" /> Prev
        </button>
      )}
      {isNextPossible && (
        <button className="pgn01Btn pgn01NextBtn" onClick={gotoNextPage}>
          Next <i className="fi-rr-angle-right flaticon"></i>
        </button>
      )}
    </div>
  );
};

export default Pagination;
