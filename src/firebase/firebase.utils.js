import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDUQeX8561KV82EFks7Rx_NXC8lcF2Do_8",
  authDomain: "crwn-db-fe99e.firebaseapp.com",
  projectId: "crwn-db-fe99e",
  storageBucket: "crwn-db-fe99e.appspot.com",
  messagingSenderId: "436690710951",
  appId: "1:436690710951:web:d7e0ff45d8643f25c04682",
  measurementId: "G-SQ3NXT1F1X",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
