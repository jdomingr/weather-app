import React, {useState} from 'react'
import { Aside } from './Aside';
import { SearchLocation } from './SearchLocation';

export const AsideIndex = ( {weather, location} ) => {

    const [showSearch, setShowSearch] = useState(false);
    
    const handleOnClickSearch = () => {
        setShowSearch(true);
    }

    return (
        <aside className="aside__content"> 
            {
                (!showSearch) 
                ? <Aside weather = { weather } handleOnClickSearch = { handleOnClickSearch } location = {location}/> 
                : <SearchLocation setShowSearch = { setShowSearch }/>
            }
        </aside>
    )
}
