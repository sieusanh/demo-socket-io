// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import StyledFirebaseAuth from './styled';
import firebase from '@/tools/firebase';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// Configure Firebase.
// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// };
// const apiKey = 'AIzaSyC2jFzxkHbouSJbFJlEbm5QA0vCMsy4XEo';
// const authDomain = 'chat-app-fe273.firebaseapp.com';
// const config = {
//     apiKey,
//     authDomain
// }
// firebase.initializeApp(config);
// const ab = firebase.auth();


export default function GoogleAuth() {

    // Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        // signInFlow: 'popup',
        signInFlow: 'redirect',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        signInSuccessUrl: '/dashboard',
    };
    return (
        <StyledFirebaseAuth 
            uiConfig={uiConfig} 
            firebaseAuth={firebase.auth()} 
        />
    );
}

