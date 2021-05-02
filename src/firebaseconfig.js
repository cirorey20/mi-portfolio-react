import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNyFV9nKHAuiI9ve1h_U34kXY3AiJqwRA",
    authDomain: "ciroreydev.firebaseapp.com",
    projectId: "ciroreydev",
    storageBucket: "ciroreydev.appspot.com",
    messagingSenderId: "106139623345",
    appId: "1:106139623345:web:c48dc00b2a7be9cd1d2790"
};
// Initialize Firebase
const fireb = firebase.initializeApp(firebaseConfig);
const store = fireb.firestore();

export {store};