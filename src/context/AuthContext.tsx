import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { auth } from "../firebase";

const userAuthContext = createContext({})

export const UserAuthContextProvider = ({ children }: any) => {

    const [user, setUser] = useState<any>()

    // sign up
    const signUp = (email: any, password: any) => {
        return (
            createUserWithEmailAndPassword(auth, email, password)
        )
    }

    // sign in
    const signIn = (email: any, password: any) => {
        return (
            signInWithEmailAndPassword(auth, email, password)
        )
    }

    // sign out
    const logOut = () => {
        return (
            signOut(auth)
        )
    }

    // google sing in
    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider()
        return (
            signInWithPopup(auth, googleAuthProvider)
        )
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            setUser(user)
        })

        return
    }, [])

    return (
        <userAuthContext.Provider value={{ user, signUp, signIn, logOut, googleSignIn }}>
            {children}
        </userAuthContext.Provider>
    )
}

export const useUserAuth = () => {
    return (
        useContext(userAuthContext)
    )
}