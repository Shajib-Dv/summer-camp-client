/** @format */

import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  const googleAuth = new GoogleAuthProvider();

  // sign up
  const userSignUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with google

  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleAuth);
  };

  // sign in
  const userSignIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //log out
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  //update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // user track

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoader(false);
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    userSignUp,
    googleSignIn,
    userSignIn,
    logOut,
    updateUserProfile,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
