import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

/*
* create local storage
* set User Details not delete
*/
const users = sessionStorage.getItem('users') !== null ? JSON.parse(sessionStorage.getItem('users')) : [];

const initialState = {
    userDetails: users,
    isUser: false,
}

const userDetailsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        logIn: (state, action) => {
            const user = action.payload;
            console.log('log ', state.userDetails.username, user.username);
            const IsLoggin = (state.userDetails.username === user.username && state.userDetails.password === user.password);

            if (IsLoggin) {
                toast.success(`Welcome Back ${user.username}`);
                state.isUser = true;
            } else {
                toast.error('Oops!! Create account first');
                state.isUser = false;
            }
        },

        logOut: (state, action) => {
            state.isUser = false;
        },

        sigIn: (state, action) => {

            const user = action.payload;
            console.log('Sign ', state.userDetails.username, user.username);

            const IsLoggin = (state.userDetails.username === user.username && state.userDetails.password === user.password);
            if (IsLoggin) {
                toast.error('User already exit');
                state.isUser = false;

            } else {
                toast.success(`Welcom ${user.username}`);
                state.isUser = true;
                sessionStorage.setItem('users', JSON.stringify(user));
            }
        },

    }
});

export const { sigIn, logIn } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
