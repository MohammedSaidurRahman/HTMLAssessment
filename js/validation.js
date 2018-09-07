//^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$

function validateForm() {
	
	
	var alphaExp = /^[a-zA-Z]+$/;
//	var numExp = /^(?:100|[1-9]?[0-9])$/;
	var emailExp = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
	var postExp = /^([A-Za-z0-9-]+).{6}$/;
	var addressExp;

	var x = document.forms["Form"]["name"].value;
//	var y = document.forms["Form"]["age"].value;
	var z = document.forms["Form"]["email"].value;
	var w = document.forms["Form"]["postcode"].value;
	
	if(x == "") {
		alert("Name cannot be empty");
		return false;
	}

	if(!(document.getElementById("name").value.match(alphaExp))){
		console.log("Tried to use illegal Character");
		return false;
	}

/*
	if(y == "") {
		alert("Age cannot be empty");
		return false;
	}
	
	if(!(document.getElementById("age").value.match(numExp))){
		console.log("Age must be a number");
		return false;
	
	}
*/	
	
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
	
	if(w== "") {
		alert("Postcode cannot be empty");
		return false;
	}
	
	if(!(document.getElementById("postcode").value.match(postExp)) || document.getElementById("postcode").value.length >= 10) {
		console.log("Invalid PostCode");
		return false;
	}
	
	localStorage.setItem("name",document.getElementById("name").value);
	localStorage.setItem("age",document.getElementById("age").value);
	localStorage.setItem("address",document.getElementById("address").value);
	localStorage.setItem("postcode",document.getElementById("postcode").value);
	localStorage.setItem("email",document.getElementById("email").value);
	console.log(localStorage.getItem("name"));
	console.log(localStorage.getItem("age"));
	console.log(localStorage.getItem("address"));
	console.log(localStorage.getItem("postcode"));
	console.log(localStorage.getItem("email"));
	/*	var para = document.createElement("P");
	var app = document.createTextNode(localStorage.getItem("name"));
	para.appendChild(app);
	document.getElementById("nameFD").appendChild(para);
	*/


}



function retrieve() {
	var nameP = document.createElement("p");
	var nameV = localStorage.getItem("name");
	nameP.appendChild(document.createTextNode(nameV));
	var element = document.getElementById("nameFD");
	element.appendChild(nameP);
	
	var ageP = document.createElement("p");
	var ageV = localStorage.getItem("age");
	ageP.appendChild(document.createTextNode(ageV));
	var element = document.getElementById("dobFD");
	element.appendChild(ageP);
	
	var addressP = document.createElement("p");
	var addressV = localStorage.getItem("address");
	addressP.appendChild(document.createTextNode(addressV));
	var element = document.getElementById("addressFD");
	element.appendChild(addressP);
	
	var postcodeP = document.createElement("p");
	var postcodeV = localStorage.getItem("postcode");
	postcodeP.appendChild(document.createTextNode(postcodeV));
	var element = document.getElementById("postcodeFD");
	element.appendChild(postcodeP);
	
	var emailP = document.createElement("p");
	var emailV = localStorage.getItem("email");
	emailP.appendChild(document.createTextNode(emailV));
	var element = document.getElementById("emailFD");
	element.appendChild(emailP);
	
}
