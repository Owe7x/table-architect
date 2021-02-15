import firebase from 'firebase'
import Vue from 'vue'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-uL33QjqBMQnv-82dbJ_x7ClBgG474jc",
  authDomain: "database-tools-1.firebaseapp.com",
  projectId: "database-tools-1",
  storageBucket: "database-tools-1.appspot.com",
  messagingSenderId: "1030884505534",
  appId: "1:1030884505534:web:dcccf3758cd6ff27692bef"
};


let  googleAuthProvider = new firebase.auth.GoogleAuthProvider()
let  facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

Vue.prototype.$db = db
Vue.prototype.$firebase = firebase
Vue.prototype.$googleAuthProvider = googleAuthProvider
Vue.prototype.$facebookAuthProvider = facebookAuthProvider


export default  firebase

