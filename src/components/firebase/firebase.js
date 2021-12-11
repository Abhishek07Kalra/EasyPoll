import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyD_7sJAaAMb_Q5CJ3BGFNTYS5WfRnpDLRY",
  authDomain: "easypoll-41ec0.firebaseapp.com",
  projectId: "easypoll-41ec0",
  storageBucket: "easypoll-41ec0.appspot.com",
  messagingSenderId: "224360787511",
  appId: "1:224360787511:web:9d95065dd8c5316ed159b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var db = firebase.firestore();
var providerGoogle = new firebase.auth.GoogleAuthProvider();
export { auth,  providerGoogle , db };