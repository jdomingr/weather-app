import React from 'react'
import { CardContainer } from '../card/CardContainer';
import { CardHeader } from '../card/CardHeader';

export const Dashboard = ( {weekWeather} ) => {
    return (
        <main className="main__dashboard">
            <CardHeader weekWeather = {weekWeather}/>
            {/* <CardContainer /> */}
        
        </main>
    )
}
