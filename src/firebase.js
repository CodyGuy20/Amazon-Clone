import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBy_fru7BAwdZdGh5upbK-qEtOl-Dp-6f4",
    authDomain: "clone-d5b4f.firebaseapp.com",
    projectId: "clone-d5b4f",
    storageBucket: "clone-d5b4f.appspot.com",
    messagingSenderId: "376709843091",
    appId: "1:376709843091:web:c6561a497e5e524d482566",
    measurementId: "G-5LXL5MW9XL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 