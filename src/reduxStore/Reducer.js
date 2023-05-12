import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    quantity: 1,
}
export const productReducre = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems: (state, action) => {
            const item = action.payload;
            const isItemExit = state.products.find((i) => i.id === item.id);

            if (isItemExit) {
                // already exit in cart
                state.products.forEach((i) => {
                    if (i.id === item.id) {

                    }
                })

            }
            else {
                // Added to Cart;
                state.products.push(item);
            }
        }
    }
})
export const { addItems } = productReducre.actions;
export default productReducre.reducer



