import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firbase/firebase-config";

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User::
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user in auth provider', currentUser);
            setLoading(false);
            if(currentUser && currentUser.email){
                const loggedUser = {
                    email: currentUser.email,
                  };

                fetch("https://car-doctor-server-khaki-nine.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(loggedUser),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
                      //Warning: Local Storage is not the best (second best place) to store access token.
                      localStorage.setItem("car-access-token", data.token);
                    });
            }

            else{
                localStorage.removeItem('car-access-token')
            }
        })
        return () =>{
            return unsubscribe();
        }
    },[])

    // SignIn Part::
     const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
     }

     //Google Sign In::
     const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
     }

     //Sign Out::
     const logOut = () =>{
        setLoading(true);
        return signOut(auth);
     }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;