import React, { PureComponent } from 'react';

import Button from './Button';
import './calculator.css';

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

class Calculator extends PureComponent {
  render() {
    return (
      <div className="calc-container">
        <input className="output" value="0" disabled />
        <div className="grid">
          {signArray.map((sign) => (
            <Button key={`unique-${sign}`} text={sign} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
