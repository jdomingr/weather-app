import React from 'react';


export const AsideHeader = ({handleOnClickSearch}) => {

    return (
        <div className="header">
         
            <button className="btn-default"
                onClick = {handleOnClickSearch} >
                Search for places
            </button>
    
            <button className="btn-rounded"><i className="material-icons">gps_fixed</i></button>
           
        </div>
    )
}
