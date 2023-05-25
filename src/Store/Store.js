import { configureStore } from '@reduxjs/toolkit';
import userDetailsSlice from './AuthReducer'

export const store = configureStore({
    reducer: {
        user: userDetailsSlice
    }
});