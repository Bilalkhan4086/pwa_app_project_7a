importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyDoF7-x34NnridqRU2_h4SUmBR8JqwHCYo",
  authDomain: "pwa-app-project-7a.firebaseapp.com",
  projectId: "pwa-app-project-7a",
  storageBucket: "pwa-app-project-7a.appspot.com",
  messagingSenderId: "995852134202",
  appId: "1:995852134202:web:94ae7a6db2941159b6d203"
};

firebase.initializeApp(firebaseConfig);

firebase.messaging();

