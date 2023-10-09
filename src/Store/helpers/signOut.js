import toast from "react-hot-toast";
import { auth } from "../../firebase";
import { removeUser } from "../AuthReducer";

export const signOut = () => async (dispatch) => {
    try {
        await auth.signOut();
        dispatch(removeUser(null));
        toast.success(`logout`);
    } catch (error) {
        console.error("Error signing out:", error);
    }
};