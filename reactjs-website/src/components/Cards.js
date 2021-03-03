import React from 'react'
import CardItem from './CardItem';
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
      <h1> Confira nossos trabalhos! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src="images/inter.jpg"
            text="Conheça nossos clientes"
            label="Portfolio"
            path='/services'
            />
             <CardItem 
            src="images/img-1.jpg"
            text="Conheça nossos clientes"
            label="Portfolio"
            path='/services'
            />
          </ul>
            <ul className="cards__items">
            <CardItem 
            src="images/img-2.jpg"
            text="Conheça nossos clientes"
            label="Portfolio"
            path='/services'
            />
             <CardItem 
            src="images/img-3.jpg"
            text="Conheça nossos clientes"
            label="Portfolio"
            path='/services'
            />
             <CardItem 
            src="images/img-4.jpg"
            text="Conheça nossos clientes"
            label="Portfolio"
            path='/services'
            />
          </ul>
        </div>
      </div> 
    </div>
  )
}

export default Cards 

