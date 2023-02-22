// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrGrTPxA_K1G18p69WyNoHRr1COaOd8EA",
  authDomain: "nba-registration2.firebaseapp.com",
  projectId: "nba-registration2",
  storageBucket: "nba-registration2.appspot.com",
  messagingSenderId: "237554526897",
  appId: "1:237554526897:web:def066ee1cd3bd24621090",
  measurementId: "G-6K8KHNMHC6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);

