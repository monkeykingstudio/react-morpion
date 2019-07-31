import React from 'react';
import ReactDOM from 'react-dom';

import Board from './board.js';
import './index.css';

const App = () => {
    return <Board />;
  };
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

export default App;