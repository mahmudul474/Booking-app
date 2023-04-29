import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase-confige/FirebaseConfig";

export  const UserinfoContext = createContext();

const auth = getAuth(app);

function UserContext({ children }) {
  
  const [user, setUser] = useState({});
  const [loading, setLoding] = useState(true);

  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = (probaider) => {
    setLoding(true);
    return signInWithPopup(auth, probaider);
  };

  const uptadeteuser = (userinfo) => {
    return updateProfile(auth.currentUser, userinfo);
  };

  const logout = () => {
    setLoding(true);
    return signOut(auth);
  };

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoding(false);
    });
    return () => {
      Unsubscribe();
    };
  }, []);

  const userInfo = {
    googleLogin,
    createUser,
    login,
    user,
    loading,
    logout,
    uptadeteuser,
  };

  return (
    < UserinfoContext.Provider value={userInfo}>{children}</UserinfoContext.Provider>
  );
}
export default UserContext;
