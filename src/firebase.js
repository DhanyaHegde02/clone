import firebase from  "firebase";

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqccrAW9puUSXzHqZ7YmGuDRmncWyemac",
    authDomain: "linkedin-clone-ff619.firebaseapp.com",
    projectId: "linkedin-clone-ff619",
    storageBucket: "linkedin-clone-ff619.appspot.com",
    messagingSenderId: "670227504167",
    appId: "1:670227504167:web:2f355dbc935c12d7abc202",
    measurementId: "G-C6Z9PKWY9B"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  
  
  const provider = new firebase.auth.GoogleAuthProvider();

  const storage = firebase.storage();

 export { auth, provider, storage };

  export default db;
  