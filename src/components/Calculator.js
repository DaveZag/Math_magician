import React, { PureComponent } from 'react';

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

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const prevState = this.state;
    this.setState(calculate(prevState, e.target.innerText));
  };

  render() {
    const { total, next, operation } = this.state;
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
            <Button
              key={`unique-${sign}`}
              text={sign}
              onClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
