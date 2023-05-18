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

            // already exit in user Array
            if (IsLoggin) {
                state.userDetails.forEach((ele) => {
                    if (ele.user.username === user.username && ele.user.password === user.password) {
                        toast.success(`Logging is successfully`);
                        ele.isUser = true;
                        state.userExit = ele.isUser;
                        sessionStorage.setItem('userExit', JSON.stringify(state.userExit));
                    }
                    else {
                        ele.isUser = false;
                    }
                })
                sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
            } else {
                toast.error('user not found');
                state.userExit = false;
            }

        },

        logOut: (state, action) => {

            const currentUserIndex = state.userDetails.indexOf(state.userDetails.find((i) => i.isUser === true));
            state.userDetails[currentUserIndex].isUser = false;
            state.userExit = false;
            sessionStorage.setItem('userExit', JSON.stringify(state.userExit));
            sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        },

        sigIn: (state, action) => {

            const user = action.payload;
            const IsLoggin = state.userDetails.find((i) => (i.user.username === user.username) && (i.user.password === user.password));

            if (IsLoggin) {
                toast.error('User already exit');
            } else {
                toast.success(`SignIn successful, 🙂`);
                state.userDetails.push({ user, isUser: false, userCart: [], userWish: [] });
                sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
            }
        },

        userCart: (state, action) => {
            const cart = action.payload;
            console.log(cart);
            const currentUserIndex = state.userDetails.indexOf(state.userDetails.find((i) => i.isUser === true));
            state.userDetails[currentUserIndex].userCart = cart
            sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        },

        userWishList: (state, action) => {
            const list = action.payload;
            const currentUserIndex = state.userDetails.indexOf(state.userDetails.find((i) => i.isUser === true));
            state.userDetails[currentUserIndex].userWish = list;
            sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
        }



    }
});

export const { sigIn, logIn, logOut, userCart, userWishList } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
