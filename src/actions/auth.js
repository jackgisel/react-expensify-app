import { firebase, googleAuthProvider, githubAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = (service) => {
    return () => {
        if(service === "google") {
            return firebase.auth().signInWithPopup(googleAuthProvider);
        } else if (service === "github") {
            return firebase.auth().signInWithPopup(githubAuthProvider);
        }
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};