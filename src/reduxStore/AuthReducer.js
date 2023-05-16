import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
    userDetails: []
}
const userDetailsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logIn: (state, action) => {
            const user = action.payload;
        },
        sigIn: (state, action) => {

            const user = action.payload;
            const IsLoggin = state.userDetails.find((i) => i.username === user.username);
            if (IsLoggin) {
                console.log('exit');
                toast.error('User already exit')
            } else {
                toast.success(`Welcom ${user.username}`);
                state.userDetails.push(user);
            }
        },
    }
});

export const { sigIn, logIn } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
