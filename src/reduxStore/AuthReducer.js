import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
    userDetails: []
}

const userDetailsReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logIn: (state, action) => {

        },
        sigIn: (state, action) => {

        },
    }
});

export const { } = userDetailsReducer.actions;
export default userDetailsReducer.reducer;
