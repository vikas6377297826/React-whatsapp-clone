// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA2lYPKt_qcm-mBpGqk-OMGX8jIKcYOgI4",
  authDomain: "whats-app-clone-4601f.firebaseapp.com",
  projectId: "whats-app-clone-4601f",
  storageBucket: "whats-app-clone-4601f.appspot.com",
  messagingSenderId: "623415363787",
  appId: "1:623415363787:web:7ed7039c791aedce03334e",
  measurementId: "G-GT5MMLNQ9X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
