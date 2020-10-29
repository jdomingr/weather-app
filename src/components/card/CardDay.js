import React from 'react'

export const CardDay = ({ weather }) => {
    return (
        <div className="card__item">
            <h1 className="card__item-title">Tomorrow</h1>
            <img src={`https://www.metaweather.com/static/img/weather/` + weather.weather_state_abbr + `.svg`} alt={weather.weather_state_abbr}/>
            <div className="card__item-footer">
                <p>{weather.max_temp.toFixed(2)} - {weather.min_temp.toFixed(2)}</p>
            </div>
            
        </div>
    )
}
