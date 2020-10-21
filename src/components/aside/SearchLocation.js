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
            <div className="search-container">
                <input type="text" className="input-search"
                name="search" 
                value = {search}
                onChange = {handleOnChange} 
                placeholder="Search location"/>

                <button className="aside__btn pointer"> Search </button>


                <button className="aside__btn pointer"
                onClick={ handleGoBack }>Go back</button>
             
            </div>
        </div>
    )
}
