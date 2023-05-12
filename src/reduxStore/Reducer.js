import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
}
export const productReducre = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems: (state, action) => {
            console.log(action.payload);
            state.products.push(action.payload)
        }
    }
})
export const { addItems } = productReducre.actions;
export default productReducre.reducer



