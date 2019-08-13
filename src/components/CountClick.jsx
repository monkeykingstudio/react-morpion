import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountClick = (props) => {
    const componentTitle = 'Count Click Component';
    const [clicked, setClicked] = useState(
        {
            "clicks": 0
        }
    );
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/clicked'
            );  
        setClicked(result.data[0]);
        };
        fetchData(); 
    },[]);

    console.log('clicked', clicked);


    // const saveClicks = (e) => {
    //     console.log('e', e);
    //         axios.put(`http://localhost:4000/clicked/${props.id}`, { clicks: e })
    //         .then(results => {console.log(results)})
    //         .catch(err => {console.log(err)})
    // }
    
    return (
        <div className="count-click">
            <h1>{ componentTitle + ' ' + props.id }</h1>
            <div>
                <span className="result">Counter value: { clicked.clicks }</span>

                <button onClick={ () => {setClicked(clicked.clicks + 1)} }>+1</button>
                <button onClick={ () => {setClicked(clicked[props.id] - 1)} }>-1</button> 
                {/* <button onClick={ () => {setClicked(clicked.clicks + 1);saveClicks(clicked.clicks + 1)} }>+1</button>
                <button onClick={ () => {setClicked(clicked.clicks - 1);saveClicks(clicked.clicks - 1)} }>+1</button> */}
            </div>
        </div>
    );
}

export default CountClick;

