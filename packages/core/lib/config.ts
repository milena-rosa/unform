import admin from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB-Ww_0rAIqSjsv5-A_xhW1Z98kP58g-cM',
  authDomain: 'tutoriais-ef144.firebaseapp.com',
  databaseURL: 'https://tutoriais-ef144.firebaseio.com',
  projectId: 'tutoriais-ef144',
  storageBucket: 'tutoriais-ef144.appspot.com',
  messagingSenderId: '480113657670',
  appId: '1:480113657670:web:6e61706e2f4481b5a5c747',
  measurementId: 'G-M6QBD8VW4T',
};

admin.initializeApp(firebaseConfig);
