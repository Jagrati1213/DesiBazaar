import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

/*
* create session storage
* for set User Details & userStatus
*/
const storage = sessionStorage.getItem('userDetails') !== null ? JSON.parse(sessionStorage.getItem('userDetails')) : [];
const userExit = sessionStorage.getItem('userDetails') !== null ? JSON.parse(sessionStorage.getItem('userExit')) : false;

const initialState = {
    userDetails: storage,
    userExit: userExit,
}

const userDetailsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        logIn: (state, action) => {

            const user = action.payload;
            const IsLoggin = state.userDetails.find((i) => (i.user.username === user.username) && (i.user.password === user.password));
            const currentUserIndex = state.userDetails.indexOf(IsLoggin);

            // Check user have acc. or not
            if (IsLoggin) {

                toast.success(`Logging is successfully`);
                state.userDetails[currentUserIndex].isUser = true;
                state.userExit = state.userDetails[currentUserIndex].isUser;
                sessionStorage.setItem('userExit', JSON.stringify(state.userExit));
                // reset storage
                sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails));

            } else {
                toast.error('user not found');
                state.userExit = false;
            }

        },

        logOut: (state) => {
            const currentUserIndex = state.userDetails.indexOf(state.userDetails.find((i) => i.isUser === true));
            state.userDetails[currentUserIndex].isUser = false;
            state.userExit = false;
            sessionStorage.setItem('userExit', JSON.stringify(state.userExit));
            // reset storage
            sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        },

        sigIn: (state, action) => {

            const user = action.payload;
            const IsLoggin = state.userDetails.find((i) => (i.user.username === user.username) && (i.user.password === user.password));

            if (IsLoggin) {
                toast.error('User already exit');
            } else {
                toast.success(`SignIn successful, 🙂`);
                state.userDetails.push({ user, isUser: false, userCart: [], userWish: [], total: 0, subTotal: 0, delivery: 0, });
                // set storage
                sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
            }
        },

        userCartList: (state, action) => {

            const cartItem = action.payload;
            const currentUserIndex = state.userDetails.indexOf(state.userDetails.find((i) => i.isUser === true));
            const isItemExit = state.userDetails[currentUserIndex].userCart.find((i) => i.cartItem.id === cartItem.id);

            // check item exit or not
            if (isItemExit) {
                state.userDetails[currentUserIndex].userCart.forEach((ele) => {
                    if (ele.cartItem.id === cartItem.id) {
                        ele.quantity += 1;
                    }
                })
            }
            else {
                state.userDetails[currentUserIndex].userCart.push({ cartItem, quantity: 1 });
            }
            // reset storage
            sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        },

        userWishList: (state, action) => {

            const cartItem = action.payload;
            const currentUserIndex = state.userDetails.indexOf(state.userDetails.find((i) => i.isUser === true));
            const isItemExit = state.userDetails[currentUserIndex].userWish.find((i) => i.cartItem.id === cartItem.id);

            // check item exit or not
            if (isItemExit) {
                state.userDetails[currentUserIndex].userWish.forEach((ele) => {
                    if (ele.cartItem.id === cartItem.id) {
                        toast.success('Already exit in list');
                    }
                })
            }
            else {
                // Added to list;
                state.userDetails[currentUserIndex].userWish.push({ cartItem, quantity: 1 });
                toast.success('Added to list');
            }
            // reset storage
            sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        },

        removeCartItem: (state, action) => {
            const itemId = action.payload;
            const currentUserIndex = state.userDetails.indexOf(state.userDetails.find((i) => i.isUser === true));
            const isItemExit = state.userDetails[currentUserIndex].userCart.find((i) => i.cartItem.id === itemId);
            const itemIndex = state.userDetails[currentUserIndex].userCart.indexOf(isItemExit);

            // remove item from cart array
            state.userDetails[currentUserIndex].userCart.splice(itemIndex, 1);
            // reset storage
            sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))

        },

        removeListItem: (state, action) => {

            const itemId = action.payload;
            const currentUserIndex = state.userDetails.indexOf(state.userDetails.find((i) => i.isUser === true));
            const isItemExit = state.userDetails[currentUserIndex].userWish.find((i) => i.cartItem.id === itemId);
            const itemIndex = state.userDetails[currentUserIndex].userWish.indexOf(isItemExit);

            // remove item from cart array
            state.userDetails[currentUserIndex].userWish.splice(itemIndex, 1);
            // reset storage
            sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        },

        calculatePrice: (state) => {

            let sum = 0;
            const currentUserIndex = state.userDetails.indexOf(state.userDetails.find((i) => i.isUser === true));
            state.userDetails[currentUserIndex].userCart.forEach((ele) =>
                (sum += Number(Math.ceil(ele.cartItem.price)) * Number(ele.quantity))
            );
            state.userDetails[currentUserIndex].subTotal = sum;
            state.userDetails[currentUserIndex].delivery = state.subTotal > 1000 ? 0 : 200;
            state.userDetails[currentUserIndex].total = state.userDetails[currentUserIndex].subTotal + state.userDetails[currentUserIndex].delivery;
            // reset storage
            sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        },

        userDecrementItems: (state, action) => {
            const itemId = action.payload;
            const currentUserIndex = state.userDetails.indexOf(state.userDetails.find((i) => i.isUser === true));

            state.userDetails[currentUserIndex].userCart.forEach((ele) => {
                console.log(ele.quantity);
                if (ele.cartItem.id === itemId && ele.quantity > 1) {
                    return ele.quantity -= 1;
                } else {
                    return ele.quantity = ele.quantity;
                }
            })
        },

        userIncrementItems: (state, action) => {
            const itemId = action.payload;
            const currentUserIndex = state.userDetails.indexOf(state.userDetails.find((i) => i.isUser === true));

            state.userDetails[currentUserIndex].userCart.forEach((ele) => {
                if (ele.cartItem.id === itemId) {
                    return ele.quantity += 1;

                } else {
                    return ele.quantity = ele.quantity;
                }
            })
        },

    }
});

export const {
    sigIn,
    logIn,
    logOut,
    userCartList,
    userWishList,
    removeCartItem,
    removeListItem,
    calculatePrice,
    userDecrementItems,
    userIncrementItems } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
