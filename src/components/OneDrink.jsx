import React from 'react'
import { Link } from 'react-router-dom'

const OneDrink = ({
  idDrink: id,
  strDrinkThumb: image,
  strDrink: name,
  strAlcoholic: typedrink,
  strInstructions: instruction,
}) => {
  return (
    <article className='article__item'>
      <div className='item__img'>
        <img src={image} alt={name} />
      </div>

      <div className='item__text'>
        <h3>{name}</h3>
        <p>{instruction.slice(0, 50)}...</p>
        <p className='item__text--alc'>{typedrink}</p>
        <Link className='item__btn' to={`/singleDrink/${id}`}>
          Details
        </Link>
      </div>
    </article>
  )
}

export default OneDrink
