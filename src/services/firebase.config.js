import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDKIKSKT3hLCusPtmzBrPSIddfLWDh8RcI",
  authDomain: "vsl-core-flavors-prod.firebaseapp.com",
  projectId: "vsl-core-flavors-prod",
  storageBucket: "vsl-core-flavors-prod.appspot.com",
  messagingSenderId: "474499659454",
  appId: "1:474499659454:web:02be6b51734d36e1fd10ef",
  measurementId: "G-SFF23F2KEB"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);