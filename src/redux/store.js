import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import counterReducer from '../redux/counter';
import userReducer from '../redux/user';
import generalLoginCheck from './generalLoginCheck';
import planSlice from './planSelect';


const persistConfig = {
  key: 'root',
  storage,
};

const logedUserData = persistReducer(persistConfig, userReducer);
const GLoginCheck = persistReducer(persistConfig, generalLoginCheck);
const selectedPlan = persistReducer(persistConfig, planSlice);




export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: logedUserData,
    generalLoginCheck: GLoginCheck,
    selectedPlan:selectedPlan,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
}
});

export const persistor = persistStore(store);
