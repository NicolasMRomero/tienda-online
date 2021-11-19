import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFSOYsE6BlZCCopjXIJ3Iq7I3p7G1KwLk",
  authDomain: "tienda-online-e39a3.firebaseapp.com",
  projectId: "tienda-online-e39a3",
  storageBucket: "tienda-online-e39a3.appspot.com",
  messagingSenderId: "206666091895",
  appId: "1:206666091895:web:5be4e298e032a6d8ee2572"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}

export const getAuth = () => {
  return firebase.auth(app)
}

export const provider = new firebase.auth.GoogleAuthProvider()