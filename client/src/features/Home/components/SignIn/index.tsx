import { useEffect, useState } from 'react';
import GoogleAuth from './google-auth';
import firebase from '@/tools/firebase';

SignIn.propTypes = {

};

export function SignIn() {

    const [isSignedIn, setIsSignedIn] = useState(false);
    
    // Handle firebase auth changed
    useEffect(() => {
        const unregisterAuthObserver = 
            firebase.auth().onAuthStateChanged(user => { 
                console.log('before user ', user)

                if (!user) {
                    // user logs out, handle sth here
                    console.log('user is not logged in');
                    return;
                }

                setIsSignedIn(!!user) 
                console.log('after user ', user)
                
            });
        
        // Unmount
        // Make sure we un-register Firebase observers when the component unmounts.
        return () => unregisterAuthObserver(); 
    }, []);

    return (
        <div>
            <div className="text-center">
                <h2>Login Form</h2>

                <p>or Login with social accounts</p>
            </div>
            <GoogleAuth />
        </div>
    )
}
  