import React from 'react';
import ReactDOM from 'react-dom';

// import PostList from './PostList'
import Board from './board';
import CountClick from './components/CountClick';
import StarRating from './components/StarRating';


import './index.css';

const App = () => {
    return (
        <div>
            <Board />
            {/* <PostList /> */}
            <CountClick id='0'/>
            {/* <StarRating id='0' />
            <StarRating id='1' /> */}
            <StarRating id='2' nbStar={5} />

        </div>
    );
};
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

export default App;