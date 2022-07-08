// Initialize Firebase(2)
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
<script src="https://www.gstatic.com/firebasejs/5.10.0/firebase.js"></script>
  const firebaseConfig = {
    apiKey: "AIzaSyBvGhhCpPZPLn_1tcVpVB6uriB-j9CTKeQ",
    authDomain: "gems-b4c06.firebaseapp.com",
    projectId: "gems-b4c06",
    storageBucket: "gems-b4c06.appspot.com",
    messagingSenderId: "204110564855",
    appId: "1:204110564855:web:cd10287f64cbcbfd54f2f2",
    measurementId: "G-YT0N77HH02"
  };
  firebase.initializeApp(firebaseConfig);
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  
  //Reference for form collection(3)
  let formMessage = firebase.database().ref('appointment');
  
  //listen for submit event//(1)
  document
    .getElementById('submit-form')
    .addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let message = document.querySelector('#contact_message').value;
    //send message values
    sendMessage(name, email, phone,message);
    document.getElementById('appointment-form').reset();
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(name, email, phone, message) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      phone: phone,
      message: message
    });
  }
  