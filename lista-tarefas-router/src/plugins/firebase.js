import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCYnfYUF0MBwoAI09GiqlsT_mLDKsZEeYQ",
    authDomain: "todolistvue-472aa.firebaseapp.com",
    projectId: "todolistvue-472aa",
    storageBucket: "todolistvue-472aa.appspot.com",
    messagingSenderId: "516768323675",
    appId: "1:516768323675:web:98b26eec539b4c145f877e"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db,
    auth,
    profileCollection,
    tasksCollection,
}