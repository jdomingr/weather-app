import React from 'react'
import { CardItem } from './CardItem';
import './card.css';
export const CardContainer = () => {
    return (
        <div className="card">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    )
}
