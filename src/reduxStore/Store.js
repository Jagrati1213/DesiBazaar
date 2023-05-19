import { configureStore } from '@reduxjs/toolkit';
import productSlice from './ProductReducer';
import userDetailsSlice from './AuthReducer'

export const store = configureStore({
    reducer: {
        // product: productSlice,
        user: userDetailsSlice
    }
});