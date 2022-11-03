import React, { useState } from 'react';

import Button from './Button';
import './calculator.css';
import calculate from '../logic/calculate';

const signArray = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

const Calculator = () => {
  const [dataObj, setDataObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setDataObj(calculate(dataObj, e.target.innerText));
  };

  const { total, next, operation } = dataObj;
  const checkValues = () => {
    if (total || operation || next) {
      return `${total || ''} ${operation || ''} ${next || ''} `;
    }
    return '0';
  };

  return (
    <div className="calc-container">
      <input className="output" value={checkValues()} disabled />

      <div className="grid">
        {signArray.map((sign) => (
          <Button key={`unique-${sign}`} text={sign} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
