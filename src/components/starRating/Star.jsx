import React from 'react';

const Star = ({ 
    hovered = false, 
    selected = false, 
    onClick = f => f, 
    onMouseEnter = f => f,
    onMouseLeave = f => f
}) => 
    (
    <div  
    className={       
        selected
        ? 'star-selected star'
        : 'star-unselected star'
    } 
    onClick={ onClick }
    onMouseEnter={ onMouseEnter } 
    onMouseLeave={ onMouseLeave } 
    />
    );

export default Star;
