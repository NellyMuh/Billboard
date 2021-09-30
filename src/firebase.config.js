// import firebase from 'firebase';
import firebase from 'firebase/compat';

const firebaseConfig = {
  apiKey: "AIzaSyAamB7ilLEwHO8IsPwiZDBEL63qgghDTaw",
  authDomain: "billboard-management-app.firebaseapp.com",
  projectId: "billboard-management-app",
  storageBucket: "billboard-management-app.appspot.com",
  messagingSenderId: "409525783907",
  appId: "1:409525783907:web:27fb6dce0822f5b832d756",
  measurementId: "G-VYE8K0FQQX"
};
  
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const auth = firebase.auth(app);
const storage = firebase.storage(app);

export {db, auth, storage};