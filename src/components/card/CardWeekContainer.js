import React from 'react'
import { CardDay } from './CardDay';
export const CardWeekContainer = ( {weekWeather} ) => {
    return (
        <div className="card__container">
            {
                weekWeather.map( weather => (
                    <CardDay key = {weather.id} weather = {weather} />
                ))
            }
            
        </div>
    )
}
