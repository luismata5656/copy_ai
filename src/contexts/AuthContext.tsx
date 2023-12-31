"use client";
import { auth, db } from "@/app/firebaseConfig";
import { User as FirebaseUser } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";

// Extend the Firebase User interface to include custom attributes
interface User extends FirebaseUser {
  chats?: string[]; // Add a list of chat IDs
}
interface Chat {
  id: string;
  name: string;
  // Add other fields like name, participants, etc.
}
interface AuthContextType {
  user: User | null;
  chats: Chat[]; // Add a list of chat IDs
}

// Create a context
const AuthContext = createContext<AuthContextType>({ user: null, chats: [] });

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userChats, setUserChats] = useState<Chat[]>([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        const userRef = doc(db, "users", uid);

        getDoc(userRef).then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data() as User;
            setCurrentUser(userData);
            const chatIds = userData.chats || [];

            const chatPromises = chatIds.map((chatId) =>
              getDoc(doc(db, "chats", chatId)).then((chatDoc) => ({
                id: chatId,
                name: chatDoc.data()?.name || "",
                ...chatDoc.data(),
              })),
            );

            Promise.all(chatPromises).then((chats) => {
              setUserChats(chats);
            });
          } else {
            const userData = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              chats: [],
            };
            setDoc(userRef, userData).then(() => {
              setCurrentUser(user);
            });
          }
        });
      } else {
        setCurrentUser(null);
        setUserChats([]); // Clear chats when user signs out
      }
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user: currentUser, chats: userChats }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
