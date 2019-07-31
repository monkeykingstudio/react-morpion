import React from 'react';
import InputEditor from './input-editor.js';

const Header = () => {
  const message = "i'm the Header Component !";
    return (
        <div className="header">
            <h1>{message}</h1>
            <InputEditor />
        </div>
    );
  };

export default Header;