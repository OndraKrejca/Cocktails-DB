import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const singleUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const initialState = {
  drinkList: [],
  oneDrink: {},
  loading: false,
  letter: '',
}

export const getFetch = createAsyncThunk(
  'drink/getFetch',
  async (_, thunkAPI) => {
    const { letter } = thunkAPI.getState().cocktailList
    try {
      const resp = await axios(`${url}${letter}`)
      const { drinks } = resp.data

      if (drinks) {
        return drinks
      } else {
        return []
      }
    } catch (error) {
      return thunkAPI.rejectWithValue('nefunguje')
    }
  }
)

export const getIDFetch = createAsyncThunk(
  'drink/getIDFetch',
  async (item, thunkAPI) => {
    try {
      const resp = await axios(`${singleUrl}${item}`)
      const { drinks } = resp.data
      return drinks[0]
    } catch (error) {
      return thunkAPI.rejectWithValue('nejde ID')
    }
  }
)

const cocktails = createSlice({
  name: 'drink',
  initialState,

  reducers: {
    handleChange: (state, { payload }) => {
      return {
        ...state,
        letter: payload,
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getFetch.pending, (state) => {
        state.loading = true
      })

      .addCase(getFetch.fulfilled, (state, { payload }) => {
        state.loading = false
        state.drinkList = payload
      })

      .addCase(getFetch.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })

      .addCase(getIDFetch.pending, (state) => {
        state.loading = true
      })

      .addCase(getIDFetch.fulfilled, (state, { payload }) => {
        state.loading = false
        state.oneDrink = payload
      })

      .addCase(getIDFetch.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { handleChange } = cocktails.actions

export default cocktails.reducer
