import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAgoUrqZgBP8_qD4NIVosYqYMkkApBWAz8",
    authDomain: "journalapp-450b1.firebaseapp.com",
    projectId: "journalapp-450b1",
    storageBucket: "journalapp-450b1.appspot.com",
    messagingSenderId: "452375859382",
    appId: "1:452375859382:web:2c1b8779987d3616a91617"
}
  
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    app,
    firebase
}