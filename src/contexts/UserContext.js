import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const user = { displayName: "Sakib" };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = { user, createUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
