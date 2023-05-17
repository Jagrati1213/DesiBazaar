import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

/*
* create session storage
* for set User Details &userStatus
*/
const storage = sessionStorage.getItem('userDetails') !== null ? JSON.parse(sessionStorage.getItem('userDetails')) : [];
const islogged = sessionStorage.getItem('userDetails') !== null ? JSON.parse(sessionStorage.getItem('islogged')) : false;

const initialState = {
    userDetails: storage,
    isLogged: islogged,
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
                        toast.success(`Welcome Back ${user.username}`);
                        ele.isUser = true;
                        state.isLogged = ele.isUser;
                        sessionStorage.setItem('islogged', JSON.stringify(state.isLogged));
                    }
                    else {
                        ele.isUser = false;
                    }
                })
                sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
            } else {
                toast.error('user not found');
                state.isLogged = false;
            }

        },

        logOut: (state, action) => {
            state.isLogged = false
            sessionStorage.setItem('islogged', JSON.stringify(state.isLogged));
        },

        sigIn: (state, action) => {

            const user = action.payload;
            const IsLoggin = state.userDetails.find((i) => (i.user.username === user.username) && (i.user.password === user.password));

            if (IsLoggin) {
                toast.error('User already exit');
            } else {
                toast.success(`Welcom ${user.username}`);
                state.userDetails.push({ user, isUser: false });
                sessionStorage.setItem('userDetails', JSON.stringify(state.userDetails))
            }
        },

    }
});

export const { sigIn, logIn, logOut } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
