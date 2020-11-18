import firebase from "firebase/app";
import "firebase/database"
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC40C3siMNcvGZS3RbB65HlKAP-cYZO-8c",
    authDomain: "todo-with-react-firebase.firebaseapp.com",
    databaseURL: "https://todo-with-react-firebase.firebaseio.com",
    projectId: "todo-with-react-firebase",
    storageBucket: "todo-with-react-firebase.appspot.com",
    messagingSenderId: "700879781012",
    appId: "1:700879781012:web:15ad92e5a7319209fbc881",
    measurementId: "G-LCJ1ZW9V4D"
  };
  export default firebase.initializeApp(firebaseConfig);