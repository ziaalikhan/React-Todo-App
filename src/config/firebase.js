import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';



var firebaseConfig = {
    apiKey: "AIzaSyDWjfJYE2lWaa_Cm9NSyBfupi1sk_GvG6o",
    authDomain: "react-todo-app-3f02f.firebaseapp.com",
    databaseURL: "https://react-todo-app-3f02f.firebaseio.com",
    projectId: "react-todo-app-3f02f",
    storageBucket: "react-todo-app-3f02f.appspot.com",
    messagingSenderId: "303920062283",
    appId: "1:303920062283:web:000e31515e73886d4892ce",
    measurementId: "G-XM3BR5D7C1"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);