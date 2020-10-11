import React, {useState} from 'react'
import { Aside } from './Aside';
import { SearchLocation } from './SearchLocation';
import './aside.css';
export const AsideIndex = ( {weather} ) => {

    const [showSearch, setShowSearch] = useState(false);
    
    const handleOnClickSearch = () => {
        setShowSearch(true);
    }

    return (
        <>
            {
                (!showSearch) 
                ? <Aside weather = { weather } handleOnClickSearch = { handleOnClickSearch } /> 
                : <SearchLocation setShowSearch = { setShowSearch }/>
            }
        </>
    )
}
