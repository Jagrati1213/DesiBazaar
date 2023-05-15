import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
    products: [],
    total: 0,
    subTotal: 0,
    delivery: 0,
    listArr: []
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
                toast.success('Added to Bag');
                state.products.push({ item, quantity: 1 });
            }
        },

        decrementItems: (state, action) => {
            const itemId = action.payload;

            state.products.forEach((ele) => {
                if (ele.item.id === itemId && ele.quantity > 0) {
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
        },

        calculatePrice: (state) => {
            let sum = 0;
            state.products.forEach((i) =>
                (sum += Number(Math.ceil(i.item.price)) * Number(i.quantity))
            );
            state.subTotal = sum;
            state.delivery = state.subTotal > 1000 ? 0 : 200;
            state.total = state.subTotal + state.delivery;
        },

        addToList: (state, action) => {

            const item = action.payload;
            const isItemExit = state.listArr.find((i) => i.item.id === item.id);
            if (isItemExit) {
                // already exit in cart
                state.products.forEach((ele) => {
                    if (ele.item.id === item.id) {
                        toast.success('Already exit in list')
                    }
                });
            }
            else {
                // Added to Cart;
                state.listArr.push({ item, quantity: 1 });
                toast.success('Added to list')

            }
        },


    }
})
export const { addItems, decrementItems, incrementItems, calculatePrice, addToList } = productReducre.actions;
export default productReducre.reducer



