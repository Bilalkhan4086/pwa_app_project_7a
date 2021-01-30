import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyDoF7-x34NnridqRU2_h4SUmBR8JqwHCYo",
    authDomain: "pwa-app-project-7a.firebaseapp.com",
    projectId: "pwa-app-project-7a",
    storageBucket: "pwa-app-project-7a.appspot.com",
    messagingSenderId: "995852134202",
    appId: "1:995852134202:web:94ae7a6db2941159b6d203"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messaging = firebase.messaging();
// </script>


export const InitNotification = () =>{
  Notification.requestPermission().then((permission)=>{
    console.log(permission);
    if(permission === 'granted'){
      messaging.getToken().then((currentToken) => {
  if (currentToken) {
    prompt("Token is here",currentToken)
  } 
  else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }})
}
else{
console.log("There is some error in permission granting");
}
}
).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
})



};