import { configureStore } from '@reduxjs/toolkit';
import productReducre from './Reducer';

export const store = configureStore({
    reducer: {
        product: productReducre
    }
});