import './rules.css';

import React from 'react';

import { howToPlay } from '../../constants/rules/rules';

const Rules = () => {
  const rules = howToPlay;
  return (
    <div className="sectionPadding rul01Container">
      <div className="rul01Title">How to play?</div>
      <div className="rul01Table">
        {rules.map((rule) => (
          <div className="rul01TableItem">{rule.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
