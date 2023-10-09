import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const createUserDocument = (uid) => async () => {
    try {
        // Reference to the user's document
        const userRef = doc(db, 'users', uid);

        // Data to add or update
        const userData = {
            CartList: [],
            WishList: [],
            OrdersList: [],
            total: 0,
            Subtotal: 0,
            delivery: 0,
            // Other user data
        };

        // Create a new document for the user or update an existing one
        await setDoc(userRef, userData, { merge: true });

        console.log('User data added/updated successfully.');
    } catch (error) {
        console.error('Error adding/updating user data:', error);
    }
};

