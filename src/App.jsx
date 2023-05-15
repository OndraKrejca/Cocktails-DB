import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Head, Navbar } from './components'

// Page
import Home from './page/Home'
import About from './page/About'
import SingleDrink from './page/SingleDrink'
import ErrorPage from './page/ErrorPage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Head />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />} />
        <Route path='singleDrink/:id' element={<SingleDrink />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
