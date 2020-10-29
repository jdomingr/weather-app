import React, {useState, useEffect} from 'react';
import { CardHighlightsContainer } from '../card/CardHighlightsContainer';


export const Highlights = ({highlight}) => {

    const [measures, setMeasures] = useState([]);


    useEffect(() => {
        setMeasures([
            {id: 1, title: 'Air Pressure', value: highlight.air_pressure, mu: 'mb'},
            {id: 2, title: 'Humidity', value: highlight.humidity, mu: '%'},
            {id: 3, title: 'Visibility', value: highlight.visibility, mu: 'miles'},
            {id: 4, title: 'Wind Speed',  value: highlight.wind_speed, mu: 'mph'}   
        ]);
    }, [highlight])

    return (

        <div>
            <CardHighlightsContainer measures = {measures}/>
        </div>

    );


}