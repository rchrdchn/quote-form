function getInput(){
	var userCompany = document.getElementById("inputCompany").value;
	var regExCompany = /^[a-z]/
	console.log(regExCompany.test(userCompany));
	
	var userContactName = document.getElementById("inputContactName").value;
	var regExContactName = /^[a-z]/
	console.log(regExContactName.test(userContactName));
}

var button = document.getElementById("button");

button.addEventListener("click", function(){
	return getInput();
});