import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBcwImj6KzCNwDJUcgzXZmC2L1lkxLhUSI",
    authDomain: "sojurn-website.firebaseapp.com",
    databaseURL: "https://sojurn-website.firebaseio.com",
    projectId: "sojurn-website",
    storageBucket: "sojurn-website.appspot.com",
    messagingSenderId: "124547592103",
    appId: "1:124547592103:web:48e94a3f1321c1a4981082"
  };

   firebase.initializeApp(config);

   export const auth = firebase.auth();

   export default firebase;