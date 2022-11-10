// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAjVBwSAW7kf5WSDgTwuQ250nzY57ILOTk',
  authDomain: 'quizz-jw.firebaseapp.com',
  projectId: 'quizz-jw',
  storageBucket: 'quizz-jw.appspot.com',
  messagingSenderId: '218969783811',
  appId: '1:218969783811:web:44a48321c4c355b4ce5836',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
