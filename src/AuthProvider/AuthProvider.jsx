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
import axios from "axios";

export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [feedbackOrId, setFeedbackOrId] = useState("");

  //payment context
  const [paymentInfo, setPaymentInfo] = useState({});

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

      //get and set jwt token
      if (loggedUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: loggedUser.email,
          })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoader(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
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
    paymentInfo,
    setPaymentInfo,
    feedbackOrId,
    setFeedbackOrId,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
