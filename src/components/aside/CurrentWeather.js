import React from 'react'

export const CurrentWeather = ({ weather }) => {
    return (
        <div className="aside__current-weather">
            <img src={`https://www.metaweather.com/static/img/weather/` + weather.weather_state_abbr + `.svg`} alt={weather.weather_state_abbr}/>
            <h1>{(weather.the_temp).toFixed(2)}</h1>
            <p> {`${(weather.min_temp).toFixed(0)} - ${(weather.max_temp).toFixed(0)}`} </p>
            <p>{ weather.weather_state_name}</p>
        </div>
    )
}
