import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase';

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log('User registered:', userCredential.user);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
