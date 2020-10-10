import React, {useState, useEffect} from 'react';
import './aside.css'
import { AsideHeader } from './AsideHeader';
import { CurrentWeather } from './CurrentWeather';
import { InfoLocation } from './InfoLocation';
import { getCurrentWeather, getCurrentLocation } from '../../api/weatherApi';

export const Aside = () => {

    //Where on Earth
    const [woeid, setWoeid] = useState(null);

    useEffect(() => {
    
        const result = () =>{ navigator.geolocation.getCurrentPosition( async (position) => {
            const {latitude, longitude} = position.coords;
            const data = await getCurrentLocation(latitude, longitude);
            setWoeid(data.woeid);
            });
        }
        result();
    }, []);

    useEffect(() => {
    
        if(woeid){
            const result = async() =>{
                const data = await getCurrentWeather(woeid);
                console.log(data)
            } 
            result();
        }
        
    }, [woeid])

    return(
        <div className="aside">
            <AsideHeader />
            <CurrentWeather />
            <InfoLocation />
        </div>
    );

}