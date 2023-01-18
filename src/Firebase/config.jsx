// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOOd7br7oORYPtzpZOlVVgx2IPqbrNX1c",
  authDomain: "my-e-commerce-offstyle.firebaseapp.com",
  projectId: "my-e-commerce-offstyle",
  storageBucket: "my-e-commerce-offstyle.appspot.com",
  messagingSenderId: "773740977363",
  appId: "1:773740977363:web:b8f2f4160e43ad0788c826"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
const dataBase=getFirestore(fb)

export default dataBase