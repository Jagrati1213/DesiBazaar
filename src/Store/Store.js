import { configureStore } from '@reduxjs/toolkit';
import userDetailsSlice from './AuthReducer'
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        user: userDetailsSlice
    },
    middleware: [thunk]
});