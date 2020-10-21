import React from 'react';
import { AsideHeader } from './AsideHeader';
import { CurrentWeather } from './CurrentWeather';
import { InfoLocation } from './InfoLocation';

export const Aside = ( { weather, handleOnClickSearch } ) => {

    return(
        <div className="aside__sidebar">
            <AsideHeader handleOnClickSearch = { handleOnClickSearch }/>
            <CurrentWeather weather = {weather}/>
            <InfoLocation />
        </div>
    );

}