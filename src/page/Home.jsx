import React, { useEffect } from 'react'
import { FindField, List } from '../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { getFetch } from '../features/cocktail/cocktail'

const Home = () => {
  const { letter } = useSelector((store) => store.cocktailList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFetch())
  }, [letter])
  return (
    <>
      <FindField />
      <List />
    </>
  )
}

export default Home
