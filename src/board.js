import React, { useState } from 'react';
import Header from './header.js';

const Board = () => {
    return <Headline />;
  };
  
  const Headline = () => {

    const [greeting, setGreeting] = useState(
        'Hello Function Component !'
    );

    const handleChange = e => setGreeting(e.target.value);
  
    return (
        <div>
            <Header />

            <h1>{greeting}</h1>

            <input 
                type='text'
                value={greeting}
                onChange={ handleChange }
            />
        </div>
    );
  };

export default Board;