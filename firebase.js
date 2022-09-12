// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsTORPv-1lFlqtgTSmIj3wfNyfJuJCrTk",
  authDomain: "project-e7569.firebaseapp.com",
  projectId: "project-e7569",
  storageBucket: "project-e7569.appspot.com",
  messagingSenderId: "820073177796",
  appId: "1:820073177796:web:72e1677e4e4a0c92db5f91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);