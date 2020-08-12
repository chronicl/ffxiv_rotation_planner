import firebase from "firebase";

import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDegkR-L6qYL7MyKRQqcJHcTuYvfxxeCCA",
  authDomain: "ffrotations.firebaseapp.com",
  databaseURL: "https://ffrotations.firebaseio.com",
  projectId: "ffrotations",
  storageBucket: "ffrotations.appspot.com",
  messagingSenderId: "906533519446",
  appId: "1:906533519446:web:9731afecf5d6cfbaf0bbf7",
  measurementId: "G-R5R8JM6CVG",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
