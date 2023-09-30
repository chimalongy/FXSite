import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logedIn: false,
  }

  export const generalLoginCheckSlice = createSlice({
    name: 'logincheck',
    initialState,
    reducers: {
      generallogin: (state) => {
       
        state.logedIn = true
       
      },
      generallogout: (state) => {
        state.logedIn = false
        
      },
    },
  })

  export const { generallogin, generallogout } = generalLoginCheckSlice.actions

export default generalLoginCheckSlice.reducer