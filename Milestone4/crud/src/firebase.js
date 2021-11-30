// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJiCO11MBc8yTlTBOkrHtKxXMMFGU9GN4",
  authDomain: "crud-20f5c.firebaseapp.com",
  databaseURL: "https://crud-20f5c-default-rtdb.firebaseio.com",
  projectId: "crud-20f5c",
  storageBucket: "crud-20f5c.appspot.com",
  messagingSenderId: "898154793924",
  appId: "1:898154793924:web:0db07317926d99b994f291"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();