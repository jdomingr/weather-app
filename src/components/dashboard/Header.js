import React from 'react'
import { CardWeekContainer } from '../card/CardWeekContainer'

export const Header = ({weekWeather}) => {
    return (
        <div>
            <CardWeekContainer weekWeather = {weekWeather}/>
        </div>
    )
}
