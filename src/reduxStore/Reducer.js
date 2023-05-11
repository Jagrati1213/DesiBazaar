import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
}
export const productReducre = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems: (state, acton) => {
            state.products.push(acton.payload)
        }
    }
})
export const { addItems } = productReducre.actions;
export default productReducre.reducer



