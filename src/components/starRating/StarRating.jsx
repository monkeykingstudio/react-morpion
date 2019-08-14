import React, { useState } from 'react';
import Star from './Star';

const StarRating = (props) => {

    const [starsSelected, selectStar] = useState( 0 );
    const [starsHovered, selectHover] = useState( 0 );
    const totalStars = props.nbStar;

    return (
        <div>
            <h1>{ props.title }</h1>
            <div className="star-rating">

            {[...Array(totalStars)].map((starItem, i) => (
                <Star
                key={i}
                id={i}
                selected={i < starsSelected}
                hovered={i < starsHovered}
                onClick={() => {
                    selectStar(i + 1);
                }}
                onMouseEnter={() => {
                    selectHover(i + 1);
                    {/* selectStar(starsHovered); */}
                }}
                onMouseLeave={() => {
                    selectHover(0);
                    {/* selectStar(starsSelected); */}
                }}
                />
            ))}
            
            </div>
            <p>
                {starsSelected} of {totalStars} stars
            </p>
            <p>
                {starsHovered}
            </p>
        </div>
    );
}

export default StarRating;
