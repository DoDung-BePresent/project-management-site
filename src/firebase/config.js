import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNeQBEjQVkxNcgQZDO-tXTDF1IVPtjEiM",
  authDomain: "thedojosite-a8bde.firebaseapp.com",
  projectId: "thedojosite-a8bde",
  storageBucket: "thedojosite-a8bde.appspot.com",
  messagingSenderId: "680136045874",
  appId: "1:680136045874:web:8103146e0ae5085047532b",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
