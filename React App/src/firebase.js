import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBZKgOw0iHBsgviKcnRqih4p2iPfOz4Jd8",
    authDomain: "hackathon-313610.firebaseapp.com",
    projectId: "hackathon-313610",
    storageBucket: "hackathon-313610.appspot.com",
    messagingSenderId: "637746544593",
    appId: "1:637746544593:web:6fc993948fe71af7d8aaf0",
    measurementId: "G-2TSX38YMSR"
  };

const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage()


export {auth, fire, db, storage};