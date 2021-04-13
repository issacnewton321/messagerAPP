import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVQLd_oedBNUSlrJcFhCbJWrN5Y-bRIY8",
    authDomain: "message-clone-c579d.firebaseapp.com",
    databaseURL: "https://message-clone-c579d-default-rtdb.firebaseio.com",
    projectId: "message-clone-c579d",
    storageBucket: "message-clone-c579d.appspot.com",
    messagingSenderId: "395542918376",
    appId: "1:395542918376:web:a13357e387fb54040b855d",
    measurementId: "G-7YZHZDDG2M"
})
const db = firebaseApp.firestore()
export default db