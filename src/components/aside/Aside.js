import React from 'react';
import { AsideHeader } from './AsideHeader';
import { CurrentWeather } from './CurrentWeather';
import { InfoLocation } from './InfoLocation';

export const Aside = ( { weather, handleOnClickSearch, location } ) => {

    return(
        <div className="aside__sidebar">
            <AsideHeader handleOnClickSearch = { handleOnClickSearch }/>
            <CurrentWeather weather = {weather}/>
            <InfoLocation location = {location} />
        </div>
    );

}