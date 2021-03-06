import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarRating = (props) => {
    const componentTitle = 'Star Rating Component';
    const totalStars = props.nbStar;
    console.log(totalStars);
  
    const [rating, setRating] = useState( { "star": 0 } );

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/rating'
            );  
        setRating(result.data[props.id]);
        }; 
        fetchData();
    },[props.id]);

    const saveClicks = (e) => {
        axios.put(`http://localhost:4000/rating/${props.id}`, { star: e })
        .then(results => {console.log(results)})
        .catch(err => {console.log(err)})
    }

    return (
        <div className="count-click">
            {/* { 
                Object.keys(rating).map((key) => (
                    <div key={key}>
                        <span>key value: {rating[key]}</span>
                    </div>
                ))
            } */}
            <h1>{ `${componentTitle} ${props.id}`}</h1>
            <div>

                {/* 
                    TODO: 
                   - max: 5
                   - visual stars
                   - clickable logic 
                */}

                <p>
                    <strong>{ `Rating : ${rating.star}` }</strong>
                </p>
                <button onClick={ () => {
                        const newRating = rating.star + 1; 
                        setRating(prevState => {
                            return {...prevState, star: newRating, id: props.id}
                        });
                        saveClicks(newRating)
                    }} className="add">+1
                </button>

                <button onClick={ () => {
                        const newRating = rating.star - 1; 
                            setRating(prevState => {
                                return {...prevState, star: newRating}
                            });
                            saveClicks(newRating)
                        }} 
                    className="add">-1
                </button>
            </div>
        </div>
    );
}

export default StarRating;

