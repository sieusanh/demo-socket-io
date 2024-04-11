import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'dotenv/config';

// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// };

// console.log('==a ', process.env.REACT_APP_FIREBASE_API_KEY)
// console.log('==b ', process.env.REACT_APP_FIREBASE_AUTH_DOMAIN)

const apiKey = 'AIzaSyC2jFzxkHbouSJbFJlEbm5QA0vCMsy4XEo';
const authDomain = 'chat-app-fe273.firebaseapp.com';
// Configure Firebase.
const config = {
  apiKey,
  authDomain
  // ...
};
firebase.initializeApp(config);

export default firebase;