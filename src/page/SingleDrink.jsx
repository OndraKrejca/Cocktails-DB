import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getIDFetch } from '../features/cocktail/cocktail'
import { Link } from 'react-router-dom'

const SingleDrink = () => {
  const { oneDrink, loading } = useSelector((store) => store.cocktailList)
  const { id } = useParams()
  const dispatch = useDispatch()

  const {
    strDrinkThumb: image,
    strAlcoholic: alcohol,
    strCategory: category,
    strDrink: name,
    strGlass: glass,
    strInstructions: instruction,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
  } = oneDrink

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
  ]

  useEffect(() => {
    dispatch(getIDFetch(id))
  }, [])

  if (loading) {
    return <div className='loading'></div>
  }

  return (
    <section className='section__single'>
      <Link className='single__btn' to='/'>
        Back home
      </Link>

      <h2 className=''>{name}</h2>
      <div className='single__cont--items'>
        <img src={image} alt={name} />
        <div className='single__text--box'>
          <p>
            <span className='single__text--data'>name: </span>
            {name}
          </p>
          <p>
            <span className='single__text--data'>category: </span>
            {category}
          </p>
          <p>
            <span className='single__text--data'>info: </span>
            {alcohol}
          </p>
          <p>
            <span className='single__text--data'>glass: </span>
            {glass}
          </p>
          <p>
            <span className='single__text--data'>instruction: </span>
            {instruction}
          </p>
          <p>
            <span className='single__text--data'>ingredients: </span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}, </span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleDrink
