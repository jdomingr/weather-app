import React from 'react';


export const AsideHeader = ({handleOnClickSearch}) => {

    return (
        <div className="aside__header">
         
            <button className="aside__btn pointer"
                onClick = {handleOnClickSearch} >
                Search for places
            </button>
    
            <button className="aside__btn-location pointer"><i className="material-icons">gps_fixed</i></button>
           
        </div>
    )
}
