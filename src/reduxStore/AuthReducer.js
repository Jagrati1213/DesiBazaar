import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
    userDetails: [],
    isUser: false,
}
const userDetailsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        logIn: (state, action) => {
            const user = action.payload;
            const IsLoggin = state.userDetails.find((i) => i.username === user.username && i.password === user.password);

            if (IsLoggin) {
                toast.success(`Welcome Back ${user.username}`);
                state.isUser = true;
            } else {
                toast.error('Oops!! Create account first');
                state.isUser = false;
            }
        },

        sigIn: (state, action) => {

            const user = action.payload;
            const IsLoggin = state.userDetails.find((i) => i.username === user.username && i.password === user.password);
            if (IsLoggin) {
                toast.error('User already exit');
                state.isUser = false;

            } else {
                toast.success(`Welcom ${user.username}`);
                state.userDetails.push(user);
                state.isUser = true;
            }
        },

    }
});

export const { sigIn, logIn } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
