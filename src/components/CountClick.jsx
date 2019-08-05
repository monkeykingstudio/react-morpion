import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountClick = (props) => {
    const componentTitle = 'Count Click Component';
    const [clicked, setClicked] = useState([]);

    useEffect(() => {


        // axios put here ?

        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/clicked'
            );  
        setClicked(result.data);
        };
        fetchData();  
    },[]);

    const saveClicks = (e) => {
        console.log('e', e);
            axios.put(`http://localhost:4000/clicked/${props.id}`, { clicks: e })
            .then(results => {console.log(results)})
            .catch(err => {console.log(err)})
    }
    
    return (
        <div className="count-click">
            <h1>{ componentTitle + ' ' + props.id }</h1>
            <div>
                {/* <span className="result">Clicked: { clicked }</span>
                <button onClick={ () => {setClicked(clicked + 1); saveClicks(clicked + 1)} }>+1</button>
                <button onClick={ () => {setClicked(clicked - 1); saveClicks(clicked - 1)} }>-1</button> */}
                <button onClick={ () => {saveClicks(clicked + 1)} }>+1</button>
                <button onClick={ () => {saveClicks(clicked - 1)} }>-1</button>


            </div>
        </div>
    );
}

export default CountClick;