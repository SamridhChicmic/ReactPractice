// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWsK5fqWl901OAt7aOL0n2yyh9iv3oyLk",
  authDomain: "testapp-58fd5.firebaseapp.com",
  projectId: "testapp-58fd5",
  storageBucket: "testapp-58fd5.appspot.com",
  messagingSenderId: "960797589743",
  appId: "1:960797589743:web:a5dcad490c33872fdc9b1a",
  measurementId: "G-RG75ZJN75Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);