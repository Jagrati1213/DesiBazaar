import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
}
export const productReducre = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addItems: (state, action) => {
            const item = action.payload;
            const isItemExit = state.products.find((i) => i.item.id === item.id);
            if (isItemExit) {
                // already exit in cart
                state.products.forEach((ele) => {
                    if (ele.item.id === item.id) {
                        ele.quantity += 1;
                    }
                })
            }
            else {
                // Added to Cart;
                state.products.push({ item, quantity: 1 });
            }
        },

        decrementItems: (state, action) => {
            const itemId = action.payload;

            state.products.forEach((ele) => {
                if (ele.item.id === itemId) {
                    return ele.quantity -= 1;
                } else {
                    return ele.quantity = ele.quantity
                }
            })
        },

        incrementItems: (state, action) => {
            const itemId = action.payload;

            state.products.forEach((ele) => {
                if (ele.item.id === itemId) {
                    return ele.quantity += 1;
                } else {
                    return ele.quantity = ele.quantity
                }
            })
        }

    }
})
export const { addItems, decrementItems, incrementItems } = productReducre.actions;
export default productReducre.reducer



