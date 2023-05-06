// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_vW4PgubNFxm1kEwn291_zAMmK88mDMw",
  authDomain: "fir-7ea02.firebaseapp.com",
  databaseURL: "https://fir-7ea02-default-rtdb.firebaseio.com",
  projectId: "fir-7ea02",
  storageBucket: "fir-7ea02.appspot.com",
  messagingSenderId: "910739164003",
  appId: "1:910739164003:web:c8b6ffcb62cee5ac926156",
  measurementId: "G-PRHDH233L8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);