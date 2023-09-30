import { createSlice } from '@reduxjs/toolkit'

const initialData={
    firstName:"",
    lastName: "",
    email:"",
    password:"",
    investmentDate: "",
    investmentPlan: "",
    investmentEnabled: "",
    investmentAmount: 0,
    totalProfit: 0,
    withdrawalableAmount: 0,
    accountBalance:0,
    cart:[],
    transactions:[]
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialData
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = initialData;
        },
        addToCart: (state, action) => {
            state.value.cart.push(action.payload);
        },

    },

})

export const { login, logout, addToCart } = userSlice.actions
export default userSlice.reducer