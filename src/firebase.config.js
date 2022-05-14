// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0XzyZuYxeQ_qSx5_VfMNzGRP1XTZvOlg',
  authDomain: 'entertainment-app-59dbf.firebaseapp.com',
  projectId: 'entertainment-app-59dbf',
  storageBucket: 'entertainment-app-59dbf.appspot.com',
  messagingSenderId: '719366376948',
  appId: '1:719366376948:web:bf63d668db011532c43da1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
