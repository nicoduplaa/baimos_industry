// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz9cFAGrcFz5JTQri4yY7VfeVVPo4iP9Y",
  authDomain: "baimoshop.firebaseapp.com",
  projectId: "baimoshop",
  storageBucket: "baimoshop.appspot.com",
  messagingSenderId: "864273708067",
  appId: "1:864273708067:web:cad6e392c89dad895dad96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app