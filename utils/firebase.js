import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDpFbn3YHC5vLLiv6bbVkW__SUUqwEnGrI",
    authDomain: "coursescheduler-6113c.firebaseapp.com",
    databaseURL: "https://coursescheduler-6113c-default-rtdb.firebaseio.com",
    projectId: "coursescheduler-6113c",
    storageBucket: "coursescheduler-6113c.appspot.com",
    messagingSenderId: "888186878247",
    appId: "1:888186878247:web:6e9a8bd499691b52a5d102",
    measurementId: "G-76GDDNXFBP"
};

firebase.initializeApp(firebaseConfig);

export { firebase , firebaseConfig};