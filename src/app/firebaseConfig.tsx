// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkgrsfCv12ljPqcIlUTErnlQsuQd4ftWk",
  authDomain: "copy-ai-db80c.firebaseapp.com",
  projectId: "copy-ai-db80c",
  storageBucket: "copy-ai-db80c.appspot.com",
  messagingSenderId: "225036288876",
  appId: "1:225036288876:web:0124904208bb71470ce949",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export async function googleLogin() {
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(auth, provider);
}

export async function githubLogin() {
  const provider = new GithubAuthProvider();
  await signInWithRedirect(auth, provider);
}
