import React from 'react';
import Header from './header.js';


const Board = () => {
    // return <InputEditor />;
    return (
        <div>
            <Header />
           
        </div>
    );
  };
  
//   const InputEditor = () => {
//     const [greeting, setGreeting] = useState(
//         'Welcome i can be edited !'
//     );
//     const handleChange = e => setGreeting(e.target.value);

//     return (
//         <div>
//             <Header />
//             <h1>{greeting}</h1>
//             <input type='text' value={greeting} onChange={ handleChange }/>
//         </div>
//     );
//   };

export default Board;