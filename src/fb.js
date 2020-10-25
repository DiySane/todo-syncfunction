import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAgU9gSM2eHQGCjwtydVrBIuJd3Q4mj9Qc",
    authDomain: "todo-ninja-78590.firebaseapp.com",
    databaseURL: "https://todo-ninja-78590.firebaseio.com",
    projectId: "todo-ninja-78590",
    storageBucket: "todo-ninja-78590.appspot.com",
    messagingSenderId: "455007095853",
    appId: "1:455007095853:web:4c89dfcd745d3ae07bbca4",
    measurementId: "G-VDWR5NJ9BP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
