function lettersOnly(input){
	var regex = /[^a-z]/gi;
	input.value = input.value.replace(regex, "");
}
function numbersOnly(input){
	var regex = /[^0-9]/g;
	input.value = input.value.replace(regex, "");
}
function myValidation(){
let firstName = document.getElementById("fName").value;
let lastName = document.getElementById("lName").value;
let tel = document.getElementById("num").value;
let email = document.getElementById("email").value;
let webName = document.getElementById("wName").value;
let message = document.getElementById("message").value;
	if(firstName =="" & firstName <= 5){
		document.getElementById("fname_err").innerHTML="Please enter first name";
		return false;
	}else{
		document.getElementById("fname_err").innerHTML="";
	}
	if(lastName ==""){
		document.getElementById("lname_err").innerHTML="Please enter last name";
		return false;
	}else{
		document.getElementById("lname_err").innerHTML="";
	}
	if(tel ==""){
		document.getElementById("tel_err").innerHTML="Please inter your number";
		return false;
	}else{
		document.getElementById("tel_err").innerHTML="";
	}
	if(email ==""){
		document.getElementById("email_err").innerHTML="Please inter your email";
		return false;
	}else{
		document.getElementById("email_err").innerHTML="";
	}
	if(email ==""){
		document.getElementById("email_err").innerHTML="Please inter your email";
		return false;
	}else{
		document.getElementById("email_err").innerHTML="";
	}
	if(webName ==""){
		document.getElementById("web_err").innerHTML="Please inter your website name";
		return false;
	}else{
		document.getElementById("web_err").innerHTML="";
	}
	if(message ==""){
		document.getElementById("msg_err").innerHTML="Please inter your website description";
		return false;
	}else{
		document.getElementById("msg_err").innerHTML="";
	}
	
}
