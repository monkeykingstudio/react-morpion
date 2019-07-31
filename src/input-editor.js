import React, { useState } from 'react';

  const InputEditor = () => {
    const [greeting, setGreeting] = useState(
        'Welcome i can be edited !'
    );
    
    const handleChange = e => setGreeting(e.target.value);
    
    return (
        <div>
            <h1>{greeting}</h1>
            <input type='text' value={greeting} onChange={ handleChange }/>
        </div>
    );
  };

export default InputEditor;