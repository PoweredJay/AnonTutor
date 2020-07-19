firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

    
    } else {
      // No user is signed in.
    }
  });

function redirect()
{
    var occupation = document.getElementById('Occupation').value;

    if(occupation == 0)
    {
        window.open("subject.html");
    } else if(occupation == 1)
    {
        window.open("waitingroomtutor.html");
    } else
    {
        window.alert("Please choose either Student or Tutor.");
    }
}

// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });


//   function login()
//   {
//     var userEmail = document.getElementById('email_field').value;
//     var userPass = document.getElementById('password_field').value;

//     if(userPass == null)
//     {
//         window.alert("Please input a password.");
//     }

//     firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;

//         if (errorCode === 'auth/wrong-password')
//         {
//             window.alert("Wrong password.");
//         } else {
//            window.alert(errorMessage);
//         }

//         window.alert("Error: ")
//         // ...
//       });
//   }