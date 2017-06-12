var date = new Date();
var year = date.getFullYear();
var contact = new Contact();

function currentYear(year) {
	var el = document.getElementById('Year');
	el.innerHTML = year;
}

//Constructor for contacts created from contact form
function Contact(name, email, message) {
	this.name = name;
	this.email = email;
	this.message = message;
}

function notifyContact() {
	contact.name = document.getElementById('ContactName').value;
	contact.email = document.getElementById('ContactEmail').value;
	contact.message = document.getElementById('ContactMessage').value;

	var successMessage = "Hello " + contact.name + ", \n\nif this was a real and functioning form, the following message:\n\n\"" + contact.message + "\"\n\nwould have been submitted to either a database or email, and you would get a response at " + contact.email + ". \n\nIt's not real though, so, cheers! "; 

	alert(successMessage);
}

document.addEventListener("DOMContentLoaded", function(event) {
	currentYear(year);
});