import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../../firebase";
import { setUser } from "../AuthReducer";
import toast from "react-hot-toast";
import { createUserDocument } from "./createUserCollection";

export const signUp = () => async (dispatch) => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        dispatch(setUser(user));
        toast.success(`hey ${user.displayName}`);
        // Call this function when a user signs in
        createUserDocument(user.uid);
        console.log('call');

    } catch (error) {
        console.error("Error signing in with Google:", error);
    }
};