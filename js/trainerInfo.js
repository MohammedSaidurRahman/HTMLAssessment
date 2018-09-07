function jsonTask() {

console.log(data);




for(i in data.members) {
	
	x = data.members[i];

	if(document.getElementById("name").value == data.members[i].name) {
			document.getElementById("nameP").innerHTML = "Name: " + data.members[i].name;
			document.getElementById("ageP").innerHTML = "Age: " + data.members[i].age;
			document.getElementById("secretIDP").innerHTML = "Secret Identity: " + data.members[i].secretIdentity;
		for(j in data.members[i].skills) {
			q = data.members[i].skills[j-2];
			z = data.members[i].skills[j-1];
			y = data.members[i].skills[j];
			
			
			
			document.getElementById("skillsP").innerHTML =
			"Skill 1: " + q+"<br>"+
			"<br>" +"Skill 2: " + z+"<br>"+
			"<br>" + "Skill 3: " + y;
			
				}
	
		}
		
		/*
	 if(document.getElementById("name").value != data.members[i].name) {
			document.getElementById("name").innerHTML = " ";
		}
		*/


}

for(i in data.members) {
	
	
				
	for(j in data.members[i].skills) {
			
			if(document.getElementById("skills").value == data.members[i].skills[j]) {
				
				document.getElementById("skillsP").innerHTML = "Skill: " + data.members[i].skills[j];
					xP = data.members[i].name;
					var nameP = document.createElement("p");
					var nameV = xP;
					nameP.appendChild(document.createTextNode(nameV));
					var element = document.getElementById("nameP");
					element.appendChild(nameP);
				document.getElementById("ageP").innerHTML = "";
				document.getElementById("secretIDP").innerHTML = "";
				
			}
			
			
			
		}
		
	}
}

/*
for(i in data.members) {
	
	x = data.members[i];

	if(!(document.getElementById("name").value.match(data.members.name))) {
		
			document.getElementById("nameP").innerHTML = "Name: ";
			document.getElementById("ageP").innerHTML = "Age: ";
			document.getElementById("secretIDP").innerHTML = "Secret Identity: ";
		for(j in data.members[i].skills) {
		
			
			
			document.getElementById("skillsP").innerHTML =
			"Skill 1: " + "<br>"+
			"<br>" +"Skill 2: " + "<br>"+
			"<br>" + "Skill 3: " ;
			
				}
	
		}


}


}


function clear(){
	
	document.getElementById("nameP").innerHTML = " ";
	
}


*/

