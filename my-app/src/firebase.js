import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyAs0mTEpoTzO486QbrcVcm_Sy7ke4NPDp0",
  authDomain: "todo-app-6e69f.firebaseapp.com",
  databaseURL: "https://todo-app-6e69f-default-rtdb.firebaseio.com",
  projectId: "todo-app-6e69f",
  storageBucket: "todo-app-6e69f.appspot.com",
  messagingSenderId: "1006332926581",
  appId: "1:1006332926581:web:1ca54b7b857ccd6257b63c",
  measurementId: "G-JGXP1G2VK0"

});

  const db = firebaseApp.firestore();

  export default db;