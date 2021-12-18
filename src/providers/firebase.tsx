import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyAKnJlKaP35BlGKx_2tL3f4JYkHr63BfJ8',
  authDomain: 'tldr-it.firebaseapp.com',
  projectId: 'tldr-it',
  storageBucket: 'tldr-it.appspot.com',
  messagingSenderId: '651782617893',
  appId: '1:651782617893:web:7ad1f99edf4e02649878cc',
  measurementId: 'G-0108JQJKLB'
};

// Initialize Firebase
initializeApp(firebaseConfig);
const functions = getFunctions();
const db = getFirestore();

export { db, functions };
