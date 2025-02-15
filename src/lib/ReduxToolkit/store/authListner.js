import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "../slices/userSlice";
import { auth } from "@/lib/firebase/firebaseconfig";

export const authListener = (store) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            store.dispatch(
                setUser({ ...user })
            );
        } else {
            store.dispatch(setUser(null));
        }
    });
};
