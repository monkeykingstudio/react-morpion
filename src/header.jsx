import React from 'react';
import CountClick from './components/CountClick';

const Header = () => {
  const message = "i'm the Header Component !";
    return (
        <div className="header">
            <h1>{message}</h1>
            <CountClick id='amira' titre='sandra'/>
        </div>
    );
  };

export default Header;