import React from 'react'
import drinkImg from '../assets/img/drink.png'

const Head = () => {
  return (
    <section className='header__cont'>
      <div className='header__bck'>
        <h2 className='header__headline'>DRINKS</h2>
        <img className='header__image--drink' src={drinkImg} alt='drink' />
      </div>
    </section>
  )
}

export default Head
