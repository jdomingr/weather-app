import React from 'react'
import { Header } from './Header';
import { Highlights } from './Highlights';

export const Dashboard = ( {weekWeather, highlight} ) => {
    return (
        <main className="main__dashboard">
            <Header weekWeather = {weekWeather} />
            <Highlights highlight = {highlight} />
        
        </main>
    )
}
