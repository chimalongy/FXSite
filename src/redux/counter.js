import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 1,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
     
      state.count += 1
      console.log(state.count)
    },
    decrement: (state) => {
      state.count -= 1
      console.log(state.count)
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
      console.log(state.count)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer