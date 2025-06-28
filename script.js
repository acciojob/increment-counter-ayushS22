//your JS code here. If required.
const counterElement = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

let count = 0;

incrementBtn.addEventListener("click", function (){
	alert(count);
	count++;
	counterElement.textContent = count; /*  Update display */
});