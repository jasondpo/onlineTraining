
// Admin page navigation
$(".admin-nav-tab").click(function(){
    if($(this).attr("id")=="allUsers"){
        $("#allUsers").addClass("admin-nav-tab-active");
        $("#curUser").removeClass("admin-nav-tab-active");
    }else if($(this).attr("id")=="curUser"){
        $("#allUsers").removeClass("admin-nav-tab-active");
        $("#curUser").addClass("admin-nav-tab-active");
    }
});


// Firebase Code
(function(){

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyC67O9E53jaDsgSBl1cdi9QGAW-YDHKeMI",
      authDomain: "chat-app-46fc3.firebaseapp.com",
      databaseURL: "https://chat-app-46fc3-default-rtdb.firebaseio.com",
      projectId: "chat-app-46fc3",
      storageBucket: "chat-app-46fc3.appspot.com",
      messagingSenderId: "661345643483",
      appId: "1:661345643483:web:6f0f07f63e5f4ed0cc55fe"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
      // Get elements
      const txtEmail=document.getElementById('txtEmail');
      const txtPassword=document.getElementById('txtPassword');
      const btnLogin=document.getElementById('btnLogin');
      const btnSignUp=document.getElementById('btnSignUp');
      const btnLogout=document.getElementById('btnLogout');
  
      // Add login event
      btnLogin.addEventListener('click', e =>{
          // Get email and pass
          const email = txtEmail.value;
          const pass = txtPassword.value;
          const auth = firebase.auth();
          // Validate email
          if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
              // If email, try signing in
              // alert("This email is valid") 
              const promise = auth.signInWithEmailAndPassword(email, pass);
              promise.catch(e => alert(e.message));
          }else{
              alert("You have entered an invalid email address!")
          } 
      });
  
      // Add signup event
      btnSignUp.addEventListener('click', e => {
          // Get email and pass
          const email = txtEmail.value;
          const pass = txtPassword.value;
          const auth = firebase.auth();
           // Validate email
           if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
              // If email, try signing in
              // alert("This email is valid") 
              const promise = auth.createUserWithEmailAndPassword(email, pass);
              promise.catch(e => alert(e.message));
          }else{
              alert("You have entered an invalid email address!")
          } 
      });
  
      btnLogout.addEventListener('click', e =>{
          firebase.auth().signOut();
      });
  
      // Add a realtime listener
      firebase.auth().onAuthStateChanged(firebaseUser =>{
          if(firebaseUser){
              console.log(firebaseUser);
              btnLogout.classList.remove('hide');
          }else{
              console.log('not logged in;');
              btnLogout.classList.add('hide');
          }
      });
  
  }());