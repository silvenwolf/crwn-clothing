import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXFJc8UAcXAh-bg-MwOuPtvSYExlTTB6c",
    authDomain: "crwn-clothing-db-10ce4.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-10ce4.firebaseio.com",
    projectId: "crwn-clothing-db-10ce4",
    storageBucket: "crwn-clothing-db-10ce4.appspot.com",
    messagingSenderId: "463795199399",
    appId: "1:463795199399:web:7140525593182199656a82",
    measurementId: "G-PMSKNGLT56"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;