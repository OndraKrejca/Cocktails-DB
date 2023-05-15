import { configureStore } from '@reduxjs/toolkit'
import cocktails from './features/cocktail/cocktail'

const store = configureStore({
  reducer: {
    cocktailList: cocktails,
  },
})

export { store }
