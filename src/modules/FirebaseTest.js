import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDavo54ZS-vzZt7Z-HNTxA21UW3O9onkks",
  authDomain: "testforcolabmd.firebaseapp.com",
  databaseURL: "https://testforcolabmd-default-rtdb.firebaseio.com",
  projectId: "testforcolabmd",
  storageBucket: "testforcolabmd.appspot.com",
  messagingSenderId: "568964394156"
  // appId: "1:568964394156:web:1fc26e234235358d72c309",
  // measurementId: "G-MM970LDRL5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
