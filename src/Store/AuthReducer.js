import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

/*
* create Local storage
* for set User Details & userStatus
*/
const storage = localStorage.getItem('userDetails') !== null ? JSON.parse(localStorage.getItem('userDetails')) : [];
const userExit = localStorage.getItem('userDetails') !== null ? JSON.parse(localStorage.getItem('userExit')) : false;
const localCart = localStorage.getItem('localCarts') !== null ? JSON.parse(localStorage.getItem('localCarts')) : [];

const initialState = {
    userDetails: storage,
    userExit: userExit,
    currentUser: null,
    error: null,
    localCarts: [],
}


const userDetailsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload;
        },
        removeUser: (state, action) => {
            state.currentUser = action.payload;
        },
        addToLocal: (state, action) => {
            if (!state.currentUser) {
                toast.success('Added to cart')
                state.localCarts.push(action.payload);
                localStorage.setItem('localCarts', JSON.stringify(state.localCarts));
            }
        },
        removeToLocal: (state, _) => {
            state.localCarts = [];
            localStorage.setItem('localCarts', JSON.stringify(state.localCarts));
        },


        // old code
        logIn: (state, action) => {

            const user = action.payload;
            const IsLoggin = state.userDetails.find((i) => (i.user.username === user.username) && (i.user.password === user.password));

            // Check user have acc. or not
            if (IsLoggin) {

                toast.success(`Logging is successfully`);
                IsLoggin.isUser = true;
                state.userExit = IsLoggin.isUser;

                // reset storage
                localStorage.setItem('userExit', JSON.stringify(state.userExit));
                localStorage.setItem('userDetails', JSON.stringify(state.userDetails));

            } else {
                toast.error('user not found');
                state.userExit = false;
            }

        },

        logOut: (state) => {
            const currentUser = state.userDetails.find((i) => i.isUser === true);
            currentUser.isUser = false;
            state.userExit = false;

            // reset storage
            localStorage.setItem('userExit', JSON.stringify(state.userExit));
            localStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        },
        userCartList: (state, action) => {

            const cartItem = action.payload;
            console.log(cartItem);
            // const currentUser = state.userDetails.find((i) => i.isUser === true);
            // const isItemExit = currentUser.userCart.find((i) => i.cartItem?.id === cartItem.id);

            // check item exit or not
            // if (isItemExit) {
            //     isItemExit.quantity += 1
            // }
            // else {
            //     toast.success('Added to cart')
            //     currentUser.userCart.push({ cartItem, quantity: 1 });
            // }
            // // reset storage
            // localStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        },

        userWishList: (state, action) => {

            const cartItem = action.payload;
            const currentUser = state.userDetails.find((i) => i.isUser === true);
            const isItemExit = currentUser.userWish.find((i) => i.cartItem.id === cartItem.id);

            // check item exit or not
            if (isItemExit) {
                toast.success('Already exit in list');
            }
            else {
                // Added to list;
                currentUser.userWish.push({ cartItem, quantity: 1 });
                toast.success('Added to list');
            }
            // reset storage
            localStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        },

        removeCartItem: (state, action) => {
            const itemId = action.payload;
            const currentUser = state.userDetails.find((i) => i.isUser === true);
            const isItemExit = currentUser.userCart.find((i) => i.cartItem.id === itemId);
            const itemIndex = currentUser.userCart.indexOf(isItemExit);

            // remove item from cart array
            currentUser.userCart.splice(itemIndex, 1);
            // reset storage
            localStorage.setItem('userDetails', JSON.stringify(state.userDetails))

        },

        removeListItem: (state, action) => {

            const itemId = action.payload;
            const currentUser = state.userDetails.find((i) => i.isUser === true);
            const isItemExit = currentUser.userWish.find((i) => i.cartItem.id === itemId);
            const itemIndex = currentUser.userWish.indexOf(isItemExit);

            // remove item from cart array
            currentUser.userWish.splice(itemIndex, 1);
            // reset storage
            localStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        },

        calculatePrice: (state) => {

            let sum = 0;
            const currentUser = state.userDetails.find((i) => i.isUser === true);
            currentUser.userCart.forEach((ele) =>
                (sum += Number(Math.ceil(ele.cartItem.price)) * Number(ele.quantity))
            );
            currentUser.subTotal = sum;
            currentUser.delivery = state.subTotal > 1000 ? 0 : 200;
            currentUser.total = currentUser.subTotal + currentUser.delivery;
            // reset storage
            localStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        },

        userDecrementItems: (state, action) => {
            const itemId = action.payload;
            const currentUser = state.userDetails.find((i) => i.isUser === true);

            currentUser.userCart.forEach((ele) => {
                if (ele.cartItem.id === itemId && ele.quantity > 1) {
                    return ele.quantity -= 1;
                } else {
                    return ele.quantity;
                }
            })
        },

        userIncrementItems: (state, action) => {
            const itemId = action.payload;
            const currentUser = state.userDetails.find((i) => i.isUser === true);

            currentUser.userCart.forEach((ele) => {
                if (ele.cartItem.id === itemId) {
                    return ele.quantity += 1;

                } else {
                    return ele.quantity;
                }
            })
        },

        userOrderList: (state, action) => {
            const cartItem = action.payload;
            const currentUser = state.userDetails.find((i) => i.isUser === true);
            currentUser.userOrder.push(cartItem);
            // reset storage
            localStorage.setItem('userDetails', JSON.stringify(state.userDetails));
        },

        clearCartList: (state) => {
            const currentUser = state.userDetails.find((i) => i.isUser === true);
            currentUser.userCart = [];
            // reset storage
            localStorage.setItem('userDetails', JSON.stringify(state.userDetails));
        }

    }
});

// const userDetailsSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {
//         sigIn: (state, action) => {
//             state.user = action.payload;
//             state.error = null;
//             console.log(state.user);
//         },
//         sigOut: (state, action) => {
//             state.user = null;
//             state.error = action.payload;
//             console.log(user);
//         }
//     }
// });
export const {
    setUser,
    removeUser,
    addToLocal,
    removeToLocal,
    logIn,
    logOut,
    userCartList,
    userWishList,
    removeCartItem,
    removeListItem,
    calculatePrice,
    userDecrementItems,
    userIncrementItems,
    userOrderList,
    clearCartList } = userDetailsSlice.actions;
// export const {
//     sigIn,
//     sigOut
// } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
