import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChange } from '../features/cocktail/cocktail'

const FindField = () => {
  const { letter } = useSelector((store) => store.cocktailList)
  const dispatch = useDispatch()
  const searchValue = useRef(null)

  useEffect(() => {
    // searchValue.current.focus()
  }, [])

  return (
    <section className='section__input'>
      <h2 className='section_i__headline'>Search Your Favorite Cocktail</h2>
      <form>
        <input
          className='section_i__input'
          type='text'
          value={letter}
          ref={searchValue}
          onChange={(e) => dispatch(handleChange(e.target.value))}
        ></input>
      </form>
    </section>
  )
}

export default FindField
