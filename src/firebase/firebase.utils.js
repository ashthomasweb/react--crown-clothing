import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDrxeHevA5ICpDuQOHXsJHBQHK_gr2gUmw",
  authDomain: "react--crown-clothing.firebaseapp.com",
  projectId: "react--crown-clothing",
  storageBucket: "react--crown-clothing.appspot.com",
  messagingSenderId: "871101269813",
  appId: "1:871101269813:web:a2e8da35160750e2cb2e7c",
  measurementId: "G-49Z0WYV1PT",
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
