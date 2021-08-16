// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBKNrXFgNE4CPo1Z5-K2vqX8iQ7KcgaNHU",
    authDomain: "kwitter-8c556.firebaseapp.com",
    databaseURL: "https://kwitter-8c556-default-rtdb.firebaseio.com",
    projectId: "kwitter-8c556",
    storageBucket: "kwitter-8c556.appspot.com",
    messagingSenderId: "254104059222",
    appId: "1:254104059222:web:f4384aeeb93571d92ceaf7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();