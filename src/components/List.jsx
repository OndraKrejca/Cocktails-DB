import React from 'react'
import { useSelector } from 'react-redux'
import OneDrink from './OneDrink'

const List = () => {
  const { drinkList, loading } = useSelector((store) => store.cocktailList)

  if (loading) {
    return <div className='loading'></div>
  }

  if (drinkList.length < 1) {
    return <h2 className='alert__msg'>Box is empty</h2>
  }

  return (
    <section className='section__list'>
      {drinkList.map((item) => {
        return <OneDrink key={item.idDrink} {...item}></OneDrink>
      })}
    </section>
  )
}

export default List
