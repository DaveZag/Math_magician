import React, { useState } from 'react';

import Button from '../components/Button';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
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

  const [dataObj, setDataObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setDataObj(calculate(dataObj, e.target.textContent));
  };

  const { total, next, operation } = dataObj;
  const checkValues = () => {
    if (total || operation || next) {
      return `${total || ''} ${operation || ''} ${next || ''} `;
    }
    return '0';
  };

  return (
    <section className="calculator-section flex flex-col">
      <header>
        <h2 className="welcome-txt">Let&apos;s do some math!</h2>
      </header>

      <div className="calculator flex jc-c ai-c" data-testid="calculator">
        <div className="calc-container">
          <input
            className="output"
            data-testid="screen"
            value={checkValues()}
            disabled
          />

          <div className="grid">
            {signArray.map((sign) => (
              <Button
                key={`unique-${sign}`}
                text={sign}
                onClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
