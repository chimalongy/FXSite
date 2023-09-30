import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    selectedPlan: "",
    
  }


  export const planSelectSlice = createSlice({
    name: 'choicePlan',
    initialState,
    reducers: {
        setSelectedPlan: (state, action) => {
            state.selectedPlan = action.payload;
        },
        unSetSelectedPlan: (state) => {
        state.selectedPlan = "none"
        
      },
    },
  })

  export const { setSelectedPlan, unSetSelectedPlan } = planSelectSlice.actions

export default planSelectSlice.reducer