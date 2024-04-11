import firebase from '@/tools/firebase';

export function SignOut() {
    
    function signOut() {
        firebase.auth().signOut();
    }
        
    return (
        <div>
            <div
                onClick={signOut}
            >
                Logout
            </div>
        </div>
    )
}
