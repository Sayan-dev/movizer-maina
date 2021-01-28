// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAA80GGPGMa79aJ_MSuflnw8RfKzJp3pCo",
    authDomain: "movie-finder-e487f.firebaseapp.com",
    projectId: "movie-finder-e487f",
    storageBucket: "movie-finder-e487f.appspot.com",
    messagingSenderId: "764179385779",
    appId: "1:764179385779:web:60145686f0f99f87b48fc6",
    measurementId: "G-XCYJNN8B6H"
  };


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();