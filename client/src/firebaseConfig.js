import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXCopI09oPIRJB_U2x2TI07V_r-_3wEH4",
    authDomain: "portfolio-serena-fd682.firebaseapp.com",
    projectId: "portfolio-serena-fd682",
    storageBucket: "portfolio-serena-fd682.appspot.com",
    messagingSenderId: "1015482089693",
    appId: "1:1015482089693:web:ef18da90036125e2c09b34"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
