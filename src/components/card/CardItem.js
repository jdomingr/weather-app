import React from 'react'

export const CardItem = ({weather}) => {
    console.log(weather)
    return (
        <div className="card__item">
            <img src={`https://www.metaweather.com/static/img/weather/` + weather.weather_state_abbr + `.svg`} alt={weather.weather_state_abbr}/>
            <h1>{weather.the_temp.toFixed(2)}</h1>
        </div>
    )
}
