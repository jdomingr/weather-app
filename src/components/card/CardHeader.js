import React from 'react'
import { CardContainer } from './CardContainer'

export const CardHeader = ( {weekWeather} ) => {
    return (
        <>
            <CardContainer weekWeather = {weekWeather} />
        </>
    )
}
