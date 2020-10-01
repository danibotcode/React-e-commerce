import React from 'react'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAceKrtDi2UbQcoPLCteozGSTUHsZTKi6c",
  authDomain: "clone-cebe5.firebaseapp.com",
  databaseURL: "https://clone-cebe5.firebaseio.com",
  projectId: "clone-cebe5",
  storageBucket: "clone-cebe5.appspot.com",
  messagingSenderId: "439006107656",
  appId: "1:439006107656:web:b623e5fe5c4622ffdf99bd",
  measurementId: "G-1WMMWCYD49",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
