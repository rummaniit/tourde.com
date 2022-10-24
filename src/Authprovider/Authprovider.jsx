import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app);
const Authprovider = ({ children }) => {
    let [users, setUsers] = useState('')
    let [errors, setErrors] = useState('')
    let [loading, setLoading] = useState(true)
    // let [errors, setErrors] = useState('')

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    let loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    let verifyMail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }
    let logOut = () => {
        setLoading(true)
        signOut(auth)
    }
    let updateProfileInfo = (profile) => {
        updateProfile(auth.currentUser, profile)
    }
    useEffect(() => {
        let unsubscrube = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUsers(currentUser)
            }
            setLoading(false)
        })
        return () => {
            unsubscrube()
        }
    }, [])

    let authInfo = {
        users,
        errors,
        setErrors,
        createUser,
        loginUser,
        verifyMail,
        logOut,
        setLoading,
        loading,
        updateProfileInfo
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;