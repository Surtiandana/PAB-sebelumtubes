import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyC7_25XlVJ1PhG4F-HnTnKSsjoYcBwuA10",
  authDomain: "noteapp-a3628.firebaseapp.com",
  projectId: "noteapp-a3628",
  storageBucket: "noteapp-a3628.appspot.com",
  messagingSenderId: "131550095151",
  appId: "1:131550095151:web:469c969e851f7ee38023da"
});

const FIREBASE = firebase;

export default FIREBASE;

