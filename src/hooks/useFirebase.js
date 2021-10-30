import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import firebaseInitialize from '../Firebase/firebase.init';
import { useEffect } from 'react';


firebaseInitialize()

const useFireBase = () => {
const [user, setUser] = useState();
const [isLoading, setIsloading] = useState(true);
console.log(user);
    const auth = getAuth();
    
    const googleSignInMethod = () => {
        setIsloading(true)
        const provider = new GoogleAuthProvider();
         return signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                
            }).catch((error) => {
                
                const errorMessage = error.message;
               console.log(errorMessage);
                
            }).finally(() => {
                setIsloading(false);
            })
    }

    useEffect(() => {
        setIsloading(true);
        const unSbscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
                
            } else {
            setUser({})
            }
            setIsloading(false)

        });
        return unSbscribe;
    }, [auth])


    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          }).finally(() => {
            setIsloading(false)
          })
    }
    return {
        googleSignInMethod,
        user,
        logOut,
        isLoading

    }
};

export default useFireBase;