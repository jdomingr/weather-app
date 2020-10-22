import React from 'react'
import { CardItem } from './CardItem';
export const CardContainer = ( {weekWeather} ) => {
    return (
        <div className="card__container">
            {
                weekWeather.map( weather => (
                    <CardItem key = {weather.id} weather = {weather} />
                ))
            }
            
        </div>
    )
}
