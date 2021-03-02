import React from 'react'
import CardItem from './CardItem';
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
      <h1> Check our main wokrks! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cards 

