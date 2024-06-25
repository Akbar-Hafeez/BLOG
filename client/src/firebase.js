// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-7ed73.firebaseapp.com",
  projectId: "blog-7ed73",
  storageBucket: "blog-7ed73.appspot.com",
  messagingSenderId: "389763516058",
  appId: "1:389763516058:web:1377bf09964559e1de4123",
  measurementId: "G-19NNH9EV2L"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
