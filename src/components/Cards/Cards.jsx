import React from 'react'
import './Cards.css';
import {CardsData } from "../../Data/Data";
import Card from '../Card/Card';

const Cards = () => {
  return (
    <div className='Cards'> 
      {CardsData.map((card,index) => {
        return <Card
        title={card.title}
        color={card.color}
        barValue={card.barValue}
        value={card.value}
        icon={card.icon}
        series={card.series}
        key={index}
        />
      })}
    </div>
  )
}

export default Cards
