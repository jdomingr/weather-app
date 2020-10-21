import React from 'react'

export const CurrentWeather = ({ weather }) => {
    return (
        <div className="aside__current-weather">
            <h1>{weather.the_temp}</h1>
            <p> {`${(weather.min_temp).toFixed(0)} - ${(weather.max_temp).toFixed(0)}`} </p>
        </div>
    )
}
