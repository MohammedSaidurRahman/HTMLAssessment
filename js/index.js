function jsonFunction() {
	var x = document.getElementById("list1");
    if (x.style.display === "none") {
        x.style.display = "block";
	
    } 
}

function leave() {

	var x = document.getElementById("list1");
    if (x.style.display === "block") {
        x.style.display = "none";
		
	
    } 
}

function formFunction() {
	
	var x = document.getElementById("list2");
    if (x.style.display === "none") {
        x.style.display = "block";
		
    } 
	
	var y = document.getElementById("list3");
    if (y.style.display === "none") {
        y.style.display = "block";
	
    } 
}

function leave2() {

	var x = document.getElementById("list2");
    if (x.style.display === "block") {
        x.style.display = "none";
	
    } 
	
	var y = document.getElementById("list3");
    if (y.style.display === "block") {
        y.style.display = "none";
		
    } 
}


function colourFunction() {
	
	var x = document.getElementById("list1");
	x.style.backgroundColor = "yellow";
	x.innerHTML = "*" + x.innerHTML;
	
	
}

function noColour() {
	
	var x = document.getElementById("list1");
	x.style.backgroundColor = "white";
	x.innerHTML = "Trainer";

	
}

function colourFunction2() {
	
	var x = document.getElementById("list2");
	x.style.backgroundColor = "yellow";
	x.innerHTML = "*" + x.innerHTML;
	
	
}

function noColour2() {
	
	var x = document.getElementById("list2");
	x.style.backgroundColor = "white";
	x.innerHTML = "Entry Form";
	
}

function colourFunction3() {
	
	var x = document.getElementById("list3");
	x.style.backgroundColor = "yellow";
	x.innerHTML = "*" + x.innerHTML;
	
	
}

function noColour3() {
	
	var x = document.getElementById("list3");
	x.style.backgroundColor = "white";
	x.innerHTML = "Form Data";
	
	
}