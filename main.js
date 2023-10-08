//create account form

function formValidate() {
  var firstName = document.getElementById ("firstName").value;
  var SurName =  document.getElementById("lastName").value;
  var email =  document.getElementById("email").value;
  var password =  document.getElementById("password").value;
  var error =  document.getElementById("error");
  var text = " " ;

if (firstName.length < 5) {
    text("Please enter your first name.");
    error.innerHTML = text;
    return false;
  }

  else if (SurName.length < 5) {
    text("Please enter your sur name.");
    error.innerHTML = text;
    return false;
  }

  else if (email .indexof ("@") == -1 || email.length < 10 ) {
    text("Please enter your email.");
    error.innerHTML = text;
    return false;
  }

  else if (password.length < 8 ) {
    text("Please enter a password.");
    error.innerHTML = text;
    return false;
  }

else{
  alert ("Done");
  return true;
}
}


// log in form


function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");
  var text = " " ;

  if (email1.indexof ("@") == -1 || email.length < 10 ) {
    text = "Please enter your email.";
    error.innerHTML = text;
    return false;
  }
  else if (password.length < 8 ) {
    text = "Please enter a password.";
    error.innerHTML = text;
    return false;
  }

  else{
    alert ("Done");
    return true;
}
}