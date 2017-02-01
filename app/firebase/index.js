import firebase from 'firebase';

try {
    // Initialize Firebase
    let config = {
        apiKey: "AIzaSyBxUdE8IVndL3pPIt32DsqlAruD7Hh8cF0",
        authDomain: "reacttodo-d1b32.firebaseapp.com",
        databaseURL: "https://reacttodo-d1b32.firebaseio.com",
        storageBucket: "reacttodo-d1b32.appspot.com",
        messagingSenderId: "584694590661"
    };
    firebase.initializeApp(config);
} catch (e) {
}

export let firebaseRef = firebase.database().ref();
export default firebase;