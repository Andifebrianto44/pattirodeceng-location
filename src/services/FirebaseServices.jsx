import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD2bccyqmJ3ReCVYrJpsvgOpFrNfUWXk3c',
  authDomain: 'pattirodeceng-location.firebaseapp.com',
  projectId: 'pattirodeceng-location',
  storageBucket: 'pattirodeceng-location.firebasestorage.app',
  messagingSenderId: '24656038586',
  appId: '1:24656038586:web:f0377d271b3c4400519083',
  measurementId: 'G-75N0ELNHSB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
