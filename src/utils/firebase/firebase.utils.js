import { initializeApp } from "firebase/app";
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALG_aGldVNwiF0ZzwRXMXjkrJroznxdsI",
  authDomain: "crwn-clothing-db-efde0.firebaseapp.com",
  projectId: "crwn-clothing-db-efde0",
  storageBucket: "crwn-clothing-db-efde0.appspot.com",
  messagingSenderId: "887344800167",
  appId: "1:887344800167:web:6decb208391ee36fa3d682",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  console.log(userAuth);
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth; // userAuth is called in sign in component and it is passed with the user data from the google sign in and it comes with displayName and email...console log userAuth in here or console log user in sign in to see
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;

  // if user data exists
  // just return back this user document reference

  // but if user data does not exist
  //create / set the document with the data from userAuth in my collection
};
