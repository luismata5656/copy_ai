"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/app/firebaseConfig";
import { User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
}
// Create a context
const AuthContext = createContext<AuthContextType>({ user: null });

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
