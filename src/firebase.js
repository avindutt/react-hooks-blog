import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDA83O82BL9DQRIhNn1C0aSXCRjQGfAlzY",
  authDomain: "react-hooks-blog-37800.firebaseapp.com",
  projectId: "react-hooks-blog-37800",
  storageBucket: "react-hooks-blog-37800.appspot.com",
  messagingSenderId: "66285926229",
  appId: "1:66285926229:web:15058d63eebbe8b2a7e1dc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export db like this below
export const firestore = firebase.firestore();