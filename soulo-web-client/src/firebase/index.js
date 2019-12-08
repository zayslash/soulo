import firebase from "firebase/app";
import "firebase/storage";
// Your web app's Firebase configur ation
const firebaseConfig = {
  apiKey: "AIzaSyCXgwb_yYn0zDhbGTq1t4OysO3g9Foky4s",
  authDomain: "soulo-53ee5.firebaseapp.com",
  databaseURL: "https://soulo-53ee5.firebaseio.com",
  projectId: "soulo-53ee5",
  storageBucket: "soulo-53ee5.appspot.com",
  messagingSenderId: "613867294575",
  appId: "1:613867294575:web:b32ca371f63d54a054e29a",
  measurementId: "G-YV0RX2ZB0H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { firebase, storage as default };
