import React, { PureComponent } from 'react';

import './App.css';
import Calculator from './components/Calculator';

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Calculator />
      </div>
    );
  }
}

export default App;
