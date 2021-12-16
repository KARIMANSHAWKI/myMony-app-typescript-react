import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBKWmOeQwDW9Zem1XNl3u05CVUtJxN-WDc',
  authDomain: 'mymony-7b61c.firebaseapp.com',
  projectId: 'mymony-7b61c',
  storageBucket: 'mymony-7b61c.appspot.com',
  messagingSenderId: '965957955844',
  appId: '1:965957955844:web:e659d5fa0e95917cbba051',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();

const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
