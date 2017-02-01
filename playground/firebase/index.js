import firebase from 'firebase';

// Initialize Firebase
let config = {
    apiKey: "AIzaSyBxUdE8IVndL3pPIt32DsqlAruD7Hh8cF0",
    authDomain: "reacttodo-d1b32.firebaseapp.com",
    databaseURL: "https://reacttodo-d1b32.firebaseio.com",
    storageBucket: "reacttodo-d1b32.appspot.com",
    messagingSenderId: "584694590661"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();

// Example - Set
// =============
// firebaseRef.set({
//     appName: {
//         name: 'Todo App',
//         version: '1.0'
//     },
//     isRunning: true,
//     user: {
//         name: 'Idan',
//         age: 27
//     }
// }).then(() => {
//     console.log("Set worked!");
// }, (e) => {
//     console.error('Set failed!');
// });
//
// firebaseRef.child('appName').set({
//     name: 'Todo Application'
// });

// Example - Update
// ================
// firebaseRef.set({
//     app: {
//         name: 'Todo App',
//         version: '1.0'
//     },
//     isRunning: true,
//     user: {
//         name: 'Idan',
//         age: 27
//     }
// });
//
// firebaseRef.update({
//     'app/name': 'My Todo Application',
//     'user/name': 'Busso'
// });
//
// firebaseRef.child('app').update({
//     name: 'Todo Application'
// }).then(() => {
//     console.log("Update app name worked");
// }, e => {
//     console.error("Update app name failed:", e);
// });
//
// firebaseRef.child('user').update({
//     name: 'Idan'
// }).then(() => {
//     console.log("Update user name worked");
// }, e => {
//     console.error("Update user name failed", e);
// });

// Example - Remove
// ================
// firebaseRef.set({
//     app: {
//         name: 'Todo App',
//         version: '1.0'
//     },
//     isRunning: true,
//     user: {
//         name: 'Idan',
//         age: 27
//     }
// });
//
// // firebaseRef.child('app/name').remove();
// // firebaseRef.child('app').update({
// //     version: '2.0',
// //     name: null
// // });
//
// firebaseRef.update({
//     isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// Example - Remove
// ================
firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0'
    },
    isRunning: true,
    user: {
        name: 'Idan',
        age: 27
    }
});

// firebaseRef.child('app').once('value').then((snapshot) => {
//     console.log('Got entire database of:', snapshot.key, snapshot.val());
// }, e => {
//     console.error('Unable to fetch value', e);
// });

// Example - Async methods
// =======================
firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0'
    },
    isRunning: true,
    user: {
        name: 'Idan',
        age: 27
    }
});
// let logData = (snapshot) => {
//     console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('user').on('value', (snapshot) => {
//     console.log('Update user', snapshot.val());
// });
//
// firebaseRef.child('app').update({
//     name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//     name: 'IdanB'
// });

// Example - Arrays
// =======================
firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0'
    },
    isRunning: true,
    user: {
        name: 'Idan',
        age: 27
    }
});
//
// let notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// let newNoteRef = notesRef.push({
//     text: 'Walk the doggie'
// });
//
// console.log('Todo id', newNoteRef.key);

let todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('Todo child added:', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Walk the doggie'
});

todosRef.push({
    text: 'Walk the fish'
});