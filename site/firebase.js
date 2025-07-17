// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyAeOww2dMP_ORi3D0PO-WOyJkSca8RY908",
  authDomain: "https://console.firebase.google.com/project/decants-a0187",
  projectId: "decants-a0187",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
