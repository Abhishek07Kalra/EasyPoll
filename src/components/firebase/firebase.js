import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
var firebaseConfig = {
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var db = firebase.firestore();
var providerGoogle = new firebase.auth.GoogleAuthProvider();
export { auth,  providerGoogle , db };
