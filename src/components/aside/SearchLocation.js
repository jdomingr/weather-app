import React, {useState} from 'react'

export const SearchLocation = ( {setShowSearch} ) => {

    const [search, setSearch] = useState('');

    const handleOnChange = ( {target} ) => {
        setSearch(target.value);
    }

    const handleGoBack = () => {
        setShowSearch(false);
    }
    return (
        <div className="aside__sidebar">
            <div className="aside__search-container">
                <input type="text" className="aside__input-search"
                name="search" 
                value = {search}
                onChange = {handleOnChange} 
                placeholder="Search location"
                autoComplete="off" />

                <button className="aside__btn pointer"> Search </button>

                <button className="aside__btn pointer"
                onClick={ handleGoBack }>Go back</button>
             
            </div>
        </div>
    )
}
