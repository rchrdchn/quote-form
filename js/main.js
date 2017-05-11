// Create a function that will get the user input, test it against the standard email regex, and print the result in the console.
function getInput(){
	var userInput = document.getElementById("inputName").value;
	var regEx = /^[a-z]/
	console.log(regEx.test(userInput));
}

// Add the function to the button using addEventListener.

var button = document.getElementById("button");

button.addEventListener("click", function(){
	return getInput();
});