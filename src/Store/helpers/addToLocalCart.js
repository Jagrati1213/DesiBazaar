import { addToLocal } from "../AuthReducer";

export const addToLocalCart = (singlepr) => (dispatch) => {
    dispatch(addToLocal(singlepr));
}