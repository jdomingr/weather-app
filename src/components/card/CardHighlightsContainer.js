import React from 'react';
import { CardHighlight } from './CardHighlight';

export const CardHighlightsContainer = ( { measures }) => {
    console.log(measures)
    return (
        <div className="card__highlight-container">
            {
                measures.map( measure => 
                    <CardHighlight  key = {measure.id} measure = {measure}/>
                 )
            }
            
            
        </div>
    )
}
