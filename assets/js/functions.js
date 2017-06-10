var date = new Date();
var year = date.getFullYear();

function currentYear(year) {
	var el = document.getElementById('Year');
	el.innerHTML = year;
}

document.addEventListener("DOMContentLoaded", function(event) {
	currentYear(year);
});