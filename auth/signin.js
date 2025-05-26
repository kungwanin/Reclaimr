import { auth } from './firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log('Logged in:', userCredential.user);
    // Get ID Token to send to backend
    userCredential.user.getIdToken().then(token => {
      console.log('Token:', token);
    });
  })
  .catch((error) => {
    console.error('Login error:', error.message);
  });
