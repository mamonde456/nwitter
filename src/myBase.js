import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6sbTxJd7BHgot7Hp1HgWitbTr2htnHM4",
  authDomain: "nwitter-9829d.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_GSENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
export const authService = getAuth(firebaseApp);
