import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyCT_59szjR0lUBC91Q0Hj4mOzuueAfOsOs",
    authDomain: "cooking-ninja-site-e3e30.firebaseapp.com",
    projectId: "cooking-ninja-site-e3e30",
    storageBucket: "cooking-ninja-site-e3e30.appspot.com",
    messagingSenderId: "888704897642",
    appId: "1:888704897642:web:b281e247519e14c01df013"
  };

  // init firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebaseApp.firestore();

export {projectFirestore}
