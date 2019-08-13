import React from 'react';
import ReactDOM from 'react-dom';

// import PostList from './PostList'
import Board from './board';
import CountClick from './components/CountClick';

import './index.css';

const App = () => {
    return (
        <div>
            <Board />
            {/* <PostList /> */}
            <CountClick id='0'/>
        </div>
    );
};
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

export default App;