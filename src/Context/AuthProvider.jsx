import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.init";
import useAxiosPublic from "../CustomHooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic()
  // console.log(user);
  
  const [loading, setLoading] = useState(false);

  const googleProvider = new GoogleAuthProvider();

  const SignUpEmailAndPassword = (email, password) => {
 return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignInEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const Update_information = (name, photo) => {
updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(true);
      if(currentUser){
        const userInfo = {email : currentUser?.email}
        axiosPublic.post('/jwt',userInfo)
        .then(({data}) => {
         if(data.token){
          localStorage.setItem('access-token' , data.token)
         }
          
        })
      }
      else{
localStorage.removeItem('access-token')
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const AuthInfo = {
    user,
    setUser,
    SignInEmailAndPassword,
    SignUpEmailAndPassword,
    handleSignOut,
    SignInGoogle,
    Update_information,
    loading,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
