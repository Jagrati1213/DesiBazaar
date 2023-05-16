import { configureStore } from '@reduxjs/toolkit';
import productReducre from './Reducer';
import userDetailsReducer from './AuthReducer'

export const store = configureStore({
    reducer: {
        product: productReducre,
        user: userDetailsReducer
    }
});