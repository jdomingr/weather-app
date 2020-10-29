import React from 'react';

export const CardHighlight = ( { measure} ) => {
   
    return (
        <div className="card__highlight-item">
            <p> {measure.title} </p>
            <h1> {measure.value.toFixed(1)} {measure.mu}</h1>
        </div>
    )
}
