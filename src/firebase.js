// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import {firebase} from "@firebase/app";

// Add the Firebase services that you want to use
// import "firebase/auth";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    projectId : 'flashcard-28e2e',
    databaseURL :  'https://flashcard-28e2e.firebaseio.com'
});

export const db = firebaseApp.firestore()