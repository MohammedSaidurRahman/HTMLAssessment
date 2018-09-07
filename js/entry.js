function validateForm() {
	
	
	var alphaExp = /^[a-zA-Z]+$/;
	var numExp = /^(?:100|[1-9]?[0-9])$/;
	var emailExp = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
	var passwordExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/;
	var x = document.forms["Form"]["name"].value;
	var y = document.forms["Form"]["age"].value;
	var z = document.forms["Form"]["email"].value;
	var w = document.forms["Form"]["password"].value;
	
	if(x == "") {
		alert("Name cannot be empty");
		return false;
	}



	if(!(document.getElementById("name").value.match(alphaExp))){
		console.log("Tried to use illegal Character");
		return false;
	}


	if(y == "") {
		alert("Age cannot be empty");
		return false;
	}
	
	if(w == "") {
		alert("Password cannot be empty");
		return false;
	}
	
	if(!(document.getElementById("age").value.match(numExp))){
		console.log("Age must be a number");
		return false;
	
	}
	
	
	if(z == "") {
		alert("Email cannot be empty");
		return false;
	}
	
	if(!(document.getElementById("email").value.match(emailExp))) {
		console.log("Email Invalid");
		return false;
	}
	
	if(!(document.getElementById("email").value == document.getElementById("emailConfirm").value)){
		console.log("Your email addresses do not match");
		return false;
	}
	
	if(!(document.getElementById("password").value.match(passwordExp))) {
			console.log("Your password must be 8 characters long and contain an upper and lower case letter and also a number");
			return false;
	}
	
	
}