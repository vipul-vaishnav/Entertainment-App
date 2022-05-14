// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'entertainment-app-ee5cb.firebaseapp.com',
  projectId: 'entertainment-app-ee5cb',
  storageBucket: 'entertainment-app-ee5cb.appspot.com',
  messagingSenderId: '1004715600987',
  appId: '1:1004715600987:web:14a4c57007408858df237e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const db = getFirestore();

export default auth;
