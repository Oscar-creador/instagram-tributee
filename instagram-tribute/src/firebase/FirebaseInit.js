import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
  apiKey: "AIzaSyCQGz8DMvK36n8kv4BlbPmw9VhUDDoJF0o",
  authDomain: "instagram-clone-f345d.firebaseapp.com",
  projectId: "instagram-clone-f345d",
  storageBucket: "instagram-clone-f345d.appspot.com",
  messagingSenderId: "529156273685",
  appId: "1:529156273685:web:26b318debc9356b25a001c"
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };