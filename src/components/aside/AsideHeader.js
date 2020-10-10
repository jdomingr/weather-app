import React from 'react'


export const AsideHeader = () => {

    return (
        <div className="header">
            <div className="">
                <button className="btn-default">Search for places</button>
            </div>
            <div className="">
                <button className="btn-rounded"><i className="material-icons">gps_fixed</i></button>
            </div>
        </div>
    )
}
