import './tableCard.css';

import React from 'react';

import moment from 'moment';

import { MatchType } from '../../../../types/gameTypes';
import { getUserAvatar } from '../../../../utils/gameFunctions';

const TableCard = ({ match }: MatchType) => {
  const time = moment(match.playedAt).fromNow();
  const winnerImg =
    match.winner === "BOTH"
      ? "https://cdni.iconscout.com/illustration/premium/thumb/handshake-2839296-2361694.png"
      : getUserAvatar(match.winner);
  return (
    <div className="tc01CardContainer">
      <div className="tc01MatchInfo">
        <span>
          {match.firstPlayer} v/s {match.secondPlayer}
        </span>
        <span className="tc01Time">{time}</span>
      </div>
      <div className="tc01ResultContainer">
        Result
        <img src={winnerImg} alt={match.winner} className="tc01Image" />
        <span>{match.winner}</span>
      </div>
    </div>
  );
};

export default TableCard;
